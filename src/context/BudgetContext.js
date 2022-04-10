import { createContext, useReducer, useEffect } from "react";
// services
import { getListOfExpenses, getListOfIncomes } from "../services/localStorageService";
// helpers
import { sumOfArrayOfNumbers } from "../helpers/helpers";

export const BudgetContext = createContext();

export const BudgetContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(BudgetDataReducer, {
        dataIsReady: false,
        listOfIncome: null,
        listOfExpenses: null,
        totalIncome: 0,
        totalExpense: 0
    });

    useEffect(() => {
        const incomeList = getListOfIncomes()
        const expensesList = getListOfExpenses()
        let totalIncome = 0
        let totalExpense = 0

        if (incomeList?.length) {
            const incomesArr = incomeList.map(item => parseInt(item.value))
            totalIncome = sumOfArrayOfNumbers(incomesArr)
        }
        if (expensesList?.length) {
            const expensesArr = expensesList.map(item => parseInt(item.value))
            totalExpense = sumOfArrayOfNumbers(expensesArr)
        }

        dispatch({ type: "SET_INCOMES", payload: incomeList });
        dispatch({ type: "SET_EXPENSES", payload: expensesList });
        dispatch({ type: "SET_TOTAL_INCOME", payload: totalIncome });
        dispatch({ type: "SET_TOTAL_EXPENSE", payload: totalExpense });
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
        case "SET_TOTAL_INCOME":
            return { ...state, totalIncome: action.payload }
        case "SET_TOTAL_EXPENSE":
            return { ...state, totalExpense: action.payload }
        default:
            return state;
    }
}