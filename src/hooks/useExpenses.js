// context
import { useBudgetContext } from "./useBudgetContext";
// services
import { getListOfExpenses, setListOfExpenses } from "../services/localStorageService";

export const useExpenses = () => {
    const { dispatch } = useBudgetContext()

    const addExpense = (newIncome) => {
        const response = getListOfExpenses()
        let newList
        if (!response) {
            newList = [newIncome]
        } else {
            newList = [...response, newIncome]
        }
        setListOfExpenses(newList)
        dispatch({ type: "SET_EXPENSES", payload: newList })
    }

    const deleteExpense = (i) => {
        const response = getListOfExpenses()

        console.log(response, 'addExpense response');

        const newList = response.filter(item => item.id !== i)
        setListOfExpenses(newList)

        dispatch({ type: "SET_EXPENSES", payload: newList })
    }

    return { addExpense, deleteExpense }
}