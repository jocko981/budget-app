// context
import { useBudgetContext } from "./useBudgetContext";
// services
import { getListOfIncomes, setListOfIncomes } from "../services/localStorageService";
// helpers
import { sumOfArrayOfNumbers } from "../helpers/helpers";

export const useIncomes = () => {
    const { dispatch } = useBudgetContext()

    const addIncome = (newIncome) => {
        const response = getListOfIncomes()
        let newList
        let totalIncome

        if (response) {
            newList = [...response, newIncome]
        } else {
            newList = [newIncome]
        }
        setListOfIncomes(newList)

        if (newList?.length) {
            const incomesArr = newList.map(item => parseInt(item.value))
            totalIncome = sumOfArrayOfNumbers(incomesArr)
        }

        dispatch({ type: "SET_INCOMES", payload: newList })
        dispatch({ type: "SET_TOTAL_INCOME", payload: totalIncome });
    }

    const deleteIncome = (id) => {
        const response = getListOfIncomes()
        let newList
        let totalIncome

        newList = response.filter(item => item.id !== id)
        if (newList.length < 1) {
            newList = null
        }
        setListOfIncomes(newList)

        if (newList?.length) {
            const incomesArr = newList.map(item => parseInt(item.value))
            totalIncome = sumOfArrayOfNumbers(incomesArr)
        } else {
            totalIncome = 0
        }

        dispatch({ type: "SET_INCOMES", payload: newList })
        dispatch({ type: "SET_TOTAL_INCOME", payload: totalIncome });
    }

    return { addIncome, deleteIncome }
}