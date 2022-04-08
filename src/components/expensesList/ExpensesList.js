// styles
import "./ExpensesList.css";
// hooks
import { useBudgetContext } from "../../hooks/useBudgetContext";

export default function ExpensesList() {
    const { state } = useBudgetContext()
    console.log(state, "state in ExpenseList");

    return (
        <div className="expenses-list">
            <h2>EXPENSES</h2>
            <div className="expenses">
                <ul>
                    {[0, 1, 2, 3].map(user => (
                        <li key={user.photoURL}>
                            <span>Rent</span>
                            <span>900</span>
                            <span>% ovde</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
