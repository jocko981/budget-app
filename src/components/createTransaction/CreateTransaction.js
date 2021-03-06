import { useEffect, useState } from "react";
import Select from "react-select";
// styles
import "./CreateTransaction.css";
// helpers
import { onInputMaxLengthCheck } from "../../helpers/helpers";
// constants
import { TRANSACTION_CATEGORIES, TRANSACTION_INCOME, TRANSACTION_EXPENSE } from "../../constants/reactSelectOptions";
// hooks
import { useExpenses } from "../../hooks/useExpenses";
import { useIncomes } from "../../hooks/useIncomes";

export default function CreateTransaction() {
    const { addExpense } = useExpenses()
    const { addIncome } = useIncomes()
    const [isFormFilled, setIsFormFilled] = useState(false)
    // form fields
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")

    useEffect(() => {
        if (category && description && value) {
            setIsFormFilled(true)
        } else {
            setIsFormFilled(false)
        }

    }, [category, description, value])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const randomId = Math.random()
        const transaction = {
            id: randomId,
            description,
            value
        }

        if (category?.value === TRANSACTION_INCOME.value) {
            addIncome(transaction)
            setCategory(null)
            setDescription("")
            setValue("")
            return
        }
        if (category?.value === TRANSACTION_EXPENSE.value) {
            addExpense(transaction)
            setCategory(null)
            setDescription("")
            setValue("")
            return
        }
    }

    return (
        <div className="create-transaction">
            <form onSubmit={handleSubmit}>
                <label>
                    <Select
                        className="react-select"
                        classNamePrefix="react-select"
                        // defaultValue={"for instance: TRANSACTION_EXPENSE"}
                        placeholder={"Select..."}
                        isSearchable={false}
                        value={category}
                        options={TRANSACTION_CATEGORIES}
                        onChange={(option) => setCategory(option)}
                    />
                </label>
                <label>
                    <input
                        className="description"
                        required
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        maxLength={50}
                        onInput={onInputMaxLengthCheck}
                        placeholder="Add Description"
                    />
                </label>
                <label>
                    <input
                        className="value"
                        required
                        type="text"
                        onChange={(e) => { setValue(e.target.value.replace(/[0]|[^0-9]*/, "")) }}
                        value={value}
                        placeholder="Value"
                    />
                </label>
                {isFormFilled ? <button className="btn">???</button> : <button className="btn btn-disabled" disabled>???</button>}
            </form>
        </div>
    )
}
