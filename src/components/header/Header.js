// styles
import "./Header.css";
// hooks
import { useBudgetContext } from "../../hooks/useBudgetContext";

export default function Header() {
    const { totalIncome, totalExpense } = useBudgetContext()

    const renderBudget = () => {
        const budget = totalIncome - totalExpense
        if (budget > 0) {
            return `+${budget}`
        }
        if (budget < 0) {
            return budget
        }

        return budget
    }

    const renderHeadingtext = () => {
        if (totalIncome | totalExpense) {
            const date = new Date()
            const month = date.toLocaleString("default", { month: "long" })
            const year = date.getFullYear()
            return `Budget for ${month} in ${year}:`
        }

        return "Let's calculate your budget!"
    }

    return (
        <div className="header">
            <header>
                <h2>
                    {renderHeadingtext()}
                </h2>
                <h3>
                    {renderBudget()}
                </h3>
            </header>
            <div className="income-expense">
                <div className="total income">
                    <div className="flex-wrap">
                        <span className="text">income</span>
                        <span className="value">-100</span>
                    </div>
                </div>
                <div className="total expense">
                    <div className="flex-wrap">
                        <span className="text">expense</span>
                        <span className="value">-100</span>
                    </div>
                    <span className="percentage">19%</span>
                </div>
            </div>
        </div>
    )
}
