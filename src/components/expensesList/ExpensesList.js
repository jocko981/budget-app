// styles
import "./ExpensesList.css";
// hooks
import { useBudgetContext } from "../../hooks/useBudgetContext";
import { useExpenses } from "../../hooks/useExpenses";
// helpers
import { calcExpensePercentage } from "../../helpers/helpers";

export default function ExpensesList() {
    const { listOfExpenses } = useBudgetContext()
    const { deleteExpense } = useExpenses()

    return (
        <div className="transactions-list expenses">
            <h4>EXPENSES</h4>
            <ul>
                {listOfExpenses && listOfExpenses.map((item, i) => {
                    if (i % 2 === 0) {
                        return (
                            <li key={item.id}
                                onMouseEnter={e => e.target.classList.add("hovered")}
                                onMouseLeave={e => e.target.classList.remove("hovered")}
                            >
                                <div>
                                    <button className="delete" onClick={() => deleteExpense(item.id)}>❌</button>
                                    <span className="description">{item.description}</span>
                                </div>
                                <div>
                                    <span className="value">-{item.value}</span>
                                    <span className="percentage">19%</span>
                                </div>
                            </li>
                        )
                    } else {
                        return (
                            <li className="highlight" key={item.id}
                                onMouseEnter={e => e.target.classList.add("hovered")}
                                onMouseLeave={e => e.target.classList.remove("hovered")}
                            >
                                <div>
                                    <button className="delete" onClick={() => deleteExpense(item.id)}>❌</button>
                                    <span className="description">{item.description}</span>
                                </div>
                                <div>
                                    <span className="value">-{item.value}</span>
                                    <span className="percentage">19%</span>
                                </div>
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}
