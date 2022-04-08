// styles
import "./IncomesList.css";
// hooks
import { useBudgetContext } from "../../hooks/useBudgetContext";

export default function IncomesList() {
    const { state } = useBudgetContext()
    console.log(state, "state in incomesList");

    return (
        <div className="incomes-list">
            <h2>EXPENSES</h2>
            <div className="incomes">
                <ul>
                    {[0, 1, 2].map(user => (
                        <li key={user.photoURL}>
                            <span>Plata</span>
                            <span>+ 2000</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
