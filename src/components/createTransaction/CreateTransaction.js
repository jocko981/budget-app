import { useEffect, useState } from "react";
import Select from "react-select";
// styles
import "./CreateTransaction.css";
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
    }, [formCaughtErrorOnce, category])

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

        const transaction = {
            category,
            description,
            value
        }

        if (category === TRANSACTION_INCOME.value) {
            addIncome(transaction)
            return
        }
        if (category === TRANSACTION_EXPENSE.value) {
            addExpense(transaction)
            return
        }
    }

    return (
        <div className="create-form">
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Category:</span>
                    <Select
                        options={TRANSACTION_CATEGORIES}
                        onChange={(option) => setCategory(option.value)}
                    />
                </label>
                <label>
                    <span>Description:</span>
                    <input
                        required
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </label>
                <label>
                    <span>Value:</span>
                    <input
                        required
                        type="number"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                </label>
                <button className="btn">✔</button>
            </form>
            <a href='https://www.freepik.com/vectors/right-tick'>Right tick vector created by mamewmy - www.freepik.com</a>
            {formError && <div className="error">{formError}</div>}
        </div>
    )
}
