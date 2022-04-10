// context
import { useBudgetContext } from "./useBudgetContext";
// services
import { getListOfExpenses, setListOfExpenses } from "../services/localStorageService";
// helpers
import { sumOfArrayOfNumbers } from "../helpers/helpers";

export const useExpenses = () => {
    const { dispatch } = useBudgetContext()

    const addExpense = (newExpense) => {
        const response = getListOfExpenses()
        let newList
        let totalExpense

        if (response) {
            newList = [...response, newExpense]
        } else {
            newList = [newExpense]
        }
        setListOfExpenses(newList)

        if (newList?.length) {
            const expensesArr = newList.map(item => parseInt(item.value))
            totalExpense = sumOfArrayOfNumbers(expensesArr)
        }

        dispatch({ type: "SET_EXPENSES", payload: newList })
        dispatch({ type: "SET_TOTAL_EXPENSE", payload: totalExpense });
    }

    const deleteExpense = (id) => {
        const response = getListOfExpenses()
        let newList
        let totalExpense

        newList = response.filter(item => item.id !== id)
        if (newList.length < 1) {
            newList = null
        }
        setListOfExpenses(newList)

        if (newList?.length) {
            const expensesArr = newList.map(item => parseInt(item.value))
            totalExpense = sumOfArrayOfNumbers(expensesArr)
        }

        dispatch({ type: "SET_EXPENSES", payload: newList })
        dispatch({ type: "SET_TOTAL_EXPENSE", payload: totalExpense });
    }

    return { addExpense, deleteExpense }
}