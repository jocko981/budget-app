import { useEffect, useState } from "react";
import Select from "react-select";
// styles
import "./CreateTransaction.css";
// helpers
import { onInputMaxLengthCheck, onInputonlyNumbersCheck } from "../../helpers/helpers";
// constants
import { TRANSACTION_CATEGORIES, TRANSACTION_INCOME, TRANSACTION_EXPENSE } from "../../constants/reactSelectOptions";
// hooks
import { useExpenses } from "../../hooks/useExpenses";
import { useIncomes } from "../../hooks/useIncomes";

export default function CreateTransaction() {
    const { addExpense } = useExpenses()
    const { addIncome } = useIncomes()
    const [isFilled, setIsFilled] = useState(false)
    // form fields
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    // errors
    const [formError, setFormError] = useState(null)
    const [formCaughtErrorOnce, setFormCaughtErrorOnce] = useState(false)

    useEffect(() => {
        if (formCaughtErrorOnce) {
            if (category) {
                setFormError(null)
                return
            }
        }
    }, [formCaughtErrorOnce, description, category])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormError(null)

        if (!category) {
            setFormCaughtErrorOnce(true)
            setFormError("Select category")
            return
        }
        if (!description) {
            setFormCaughtErrorOnce(true)
            setFormError("Description needed")
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
        <div className="create-form">
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Category:</span>
                    <Select
                        value={category}
                        options={TRANSACTION_CATEGORIES}
                        onChange={(option) => setCategory(option)}
                    />
                </label>
                <label>
                    <span>Description:</span>
                    <input
                        required
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        maxLength={50}
                        onInput={onInputMaxLengthCheck}
                    />
                </label>
                <label>
                    <span>Value:</span>
                    <input
                        required
                        type="text"
                        onChange={(e) => { setValue(e.target.value.replace(/[0]|[^0-9]*/, "")) }}
                        value={value}
                    />
                </label>
                <button className="btn">✔</button>
            </form>
            {formError && <div className="error">{formError}</div>}
        </div>
    )
}
