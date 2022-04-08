// styles
import "./ExpensesList.css";
// hooks
import { useBudgetContext } from "../../hooks/useBudgetContext";

export default function ExpensesList() {
    const { listOfExpenses } = useBudgetContext()
    console.log(listOfExpenses, "state in ExpenseList");

    return (
        <div className="expenses-list">
            <h2>EXPENSES</h2>
            <div className="expenses">
                <ul>
                    {listOfExpenses && listOfExpenses.map(item => (
                        <li key={item}>
                            <span className="description">{item.description}</span>
                            <span className="value">-{item.value}</span>
                            <span className="percentage">19%fix</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
