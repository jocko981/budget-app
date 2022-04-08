// styles
import "./IncomesList.css";
// hooks
import { useBudgetContext } from "../../hooks/useBudgetContext";

export default function IncomesList() {
    const { listOfIncome } = useBudgetContext()
    console.log(listOfIncome, "state in incomesList");

    return (
        <div className="incomes-list">
            <h2>INCOMES</h2>
            <div className="incomes">
                <ul>
                    {listOfIncome && listOfIncome.map(item => (
                        <li key={item.id}>
                            <span className="description">{item.description}</span>
                            <span className="value">+{item.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
