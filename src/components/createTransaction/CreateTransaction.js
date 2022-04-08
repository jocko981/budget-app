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
    // form fields
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    // errors
    const [formError, setFormError] = useState(null)

    useEffect(() => {
        if (category) {
            setFormError(null)
            return
        }

    }, [category])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormError(null)

        if (!category) {
            setFormError("Please select category")
            return
        }

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
        <div className="create-transaction-form">
            <form onSubmit={handleSubmit}>
                <label>
                    <Select
                        placeholder={"Select..."}
                        value={category}
                        options={TRANSACTION_CATEGORIES}
                        onChange={(option) => setCategory(option)}
                    />
                </label>
                <label>
                    <input
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
                        required
                        type="text"
                        onChange={(e) => { setValue(e.target.value.replace(/[0]|[^0-9]*/, "")) }}
                        value={value}
                        placeholder="Value"
                    />
                </label>
                <button className="btn">✔</button>
            </form>
            {formError && <div className="error">{formError}</div>}
        </div>
    )
}
