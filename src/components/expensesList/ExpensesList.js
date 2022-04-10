// styles
import "./ExpensesList.css";
// hooks
import { useBudgetContext } from "../../hooks/useBudgetContext";
import { useExpenses } from "../../hooks/useExpenses";
// helpers
import { calcExpensePercentage } from "../../helpers/helpers";

export default function ExpensesList() {
    const { listOfExpenses, totalIncome } = useBudgetContext()
    const { deleteExpense } = useExpenses()

    return (
        <div className="transactions-list expenses">
            <h4>expenses</h4>
            <ul>
                {listOfExpenses && listOfExpenses.map((item, i) => {
                    if (i % 2 === 0) {
                        return (
                            <li key={item.id}
                                className="grid"
                                onMouseEnter={e => e.target.classList.add("hovered")}
                                onMouseLeave={e => e.target.classList.remove("hovered")}
                            >
                                <div className="flex-wrap">
                                    <div>
                                        <button className="delete" onClick={() => deleteExpense(item.id)}>❌</button>
                                        <span className="description">{item.description}</span>
                                    </div>
                                    <div>
                                        <span className="value">-{item.value}</span>
                                    </div>
                                </div>
                                {totalIncome ? <span className="percentage">{calcExpensePercentage(totalIncome, parseInt(item.value))}%</span> : ""}
                            </li>
                        )
                    } else {
                        return (
                            <li key={item.id}
                                className="grid highlight"
                                onMouseEnter={e => e.target.classList.add("hovered")}
                                onMouseLeave={e => e.target.classList.remove("hovered")}
                            >
                                <div className="flex-wrap">
                                    <div>
                                        <button className="delete" onClick={() => deleteExpense(item.id)}>❌</button>
                                        <span className="description">{item.description}</span>
                                    </div>
                                    <div>
                                        <span className="value">-{item.value}</span>
                                    </div>
                                </div>
                                {totalIncome ? <span className="percentage">{calcExpensePercentage(totalIncome, parseInt(item.value))}%</span> : ""}
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}
