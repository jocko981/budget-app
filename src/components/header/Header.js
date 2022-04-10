// styles
import "./Header.css";
// hooks
import { useBudgetContext } from "../../hooks/useBudgetContext";
// helpers
import { calcExpensePercentage, formatNumberAsCurrency } from "../../helpers/helpers";

export default function Header() {
    const { totalIncome, totalExpense } = useBudgetContext()
    const formatedTotalIncome = formatNumberAsCurrency(totalIncome)
    const formatedTotalExpenses = formatNumberAsCurrency(totalExpense)

    const renderBudget = () => {
        const budget = formatNumberAsCurrency(totalIncome - totalExpense)
        if (budget) {
            if (budget > 0) {
                return `+${budget}`
            }
            if (budget < 0) {
                return budget
            }

            return budget
        }
    }

    const renderHeadingtext = () => {
        if (totalIncome | totalExpense) {
            const date = new Date()
            const month = date.toLocaleString("default", { month: "long" })
            const year = date.getFullYear()
            return `Awailable Budget in ${month} in ${year}:`
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
                        <span className="value">{totalIncome != 0 ? `+${formatedTotalIncome}` : formatedTotalIncome}</span>
                    </div>
                </div>
                <div className="total expenses">
                    <div className="flex-wrap">
                        <span className="text">expenses</span>
                        <span className="value">{totalExpense != 0 ? `-${formatedTotalExpenses}` : formatedTotalExpenses}</span>
                    </div>
                    {totalIncome ? <span className="percentage">{calcExpensePercentage(totalIncome, totalExpense)}%</span> : ""}
                </div>
            </div>
        </div>
    )
}
