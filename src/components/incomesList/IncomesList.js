// styles
import "./IncomesList.css";
// hooks
import { useBudgetContext } from "../../hooks/useBudgetContext";

export default function IncomesList() {
    const { listOfIncome } = useBudgetContext()
    console.log(listOfIncome, "state in incomesList");

    return (
        <div className="transactions-list incomes">
            <h4>INCOMES</h4>
            <ul>
                {listOfIncome && listOfIncome.map((item, i) => {
                    if (i % 2 === 0) {
                        return (
                            <li key={item.id}>
                                <span className="description">{item.description}</span>
                                <span className="value">+{item.value}</span>
                            </li>
                        )
                    } else {
                        return (
                            <li className="highlight" key={item.id}>
                                <span className="description">{item.description}</span>
                                <span className="value">+{item.value}</span>
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}
