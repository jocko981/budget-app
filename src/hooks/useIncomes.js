// context
import { useBudgetContext } from "./useBudgetContext";
// services
import { getListOfIncomes, setListOfIncomes } from "../services/localStorageService";

export const useIncomes = () => {
    const { dispatch } = useBudgetContext()

    const addIncome = (newIncome) => {
        const response = getListOfIncomes()
        let newList
        if (!response) {
            newList = [newIncome]
        } else {
            newList = [...response, newIncome]
        }
        setListOfIncomes(newList)
        dispatch({ type: "SET_INCOMES", payload: newList })
    }

    const deleteIncome = (i) => {
        const response = getListOfIncomes()

        console.log(response, 'addExpense response');

        const newList = response.filter(item => item.id !== i)
        setListOfIncomes(newList)

        dispatch({ type: "SET_INCOMES", payload: newList })
    }

    return { addIncome, deleteIncome }
}