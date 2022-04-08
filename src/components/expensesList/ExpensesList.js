// styles
import "./ExpensesList.css";
// hooks
import { useBudgetContext } from "../../hooks/useBudgetContext";

export default function ExpensesList() {
    const { listOfExpenses } = useBudgetContext()
    console.log(listOfExpenses, "state in ExpenseList");

    return (
        <div className="transactions-list expenses">
            <h4>EXPENSES</h4>
            <ul>
                {listOfExpenses && listOfExpenses.map((item, i) => {
                    if (i % 2 === 0) {
                        return (
                            <li key={item.id}>
                                <span className="description">{item.description}</span>
                                <div>
                                    <span className="value">-{item.value}</span>
                                    <span className="percentage">19%fix</span>
                                </div>
                            </li>
                        )
                    } else {
                        return (
                            <li className="highlight" key={item.id}>
                                <span className="description">{item.description}</span>
                                <div>
                                    <span className="value">-{item.value}</span>
                                    <span className="percentage">19%fix</span>
                                </div>
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}
