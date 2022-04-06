import { createContext, useReducer, useEffect } from "react";

export const BudgetContext = createContext();

export const BudgetContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(BudgetDataReducer, {
        dataIsReady: false,
        listOfIncome: null,
        listOfExpenses: null,
    });

    useEffect(() => {
        const incomeList = localStorage.getItem()
        const expensesList = localStorage.getItem()

        dispatch({ type: "SET_INCOMES", payload: incomeList });
        dispatch({ type: "SET_EXPENSES", payload: expensesList });
        dispatch({ type: "DATA_IS_READY" });
        //  get localStorageItems then can dispatch this

    }, [])

    console.log("AuthContext state:", state);

    return (
        <BudgetContext.Provider value={{ ...state, dispatch }}>
            {children}
        </BudgetContext.Provider>
    );
}

export const BudgetDataReducer = (state, action) => {
    switch (action.type) {
        case "DATA_IS_READY":
            return { ...state, dataIsReady: true }
        case "SET_INCOMES":
            return { ...state, listOfIncome: action.payload }
        case "SET_EXPENSES":
            return { ...state, listOfExpenses: action.payload }
        default:
            return state;
    }
}