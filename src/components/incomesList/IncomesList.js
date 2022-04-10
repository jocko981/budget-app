// styles
import "./IncomesList.css";
// hooks
import { useBudgetContext } from "../../hooks/useBudgetContext";
import { useIncomes } from "../../hooks/useIncomes";

export default function IncomesList() {
    const { listOfIncome } = useBudgetContext()
    const { deleteIncome } = useIncomes()

    return (
        <div className="transactions-list incomes">
            <h4>incomes</h4>
            <ul>
                {listOfIncome && listOfIncome.map((item, i) => {
                    if (i % 2 === 0) {
                        return (
                            <li key={item.id}
                                onMouseEnter={e => e.target.classList.add("hovered")}
                                onMouseLeave={e => e.target.classList.remove("hovered")}
                            >
                                <div>
                                    <button className="delete" onClick={() => deleteIncome(item.id)}>❌</button>
                                    <span className="description">{item.description}</span>
                                </div>
                                <span className="value">+{item.value}</span>
                            </li>
                        )
                    } else {
                        return (
                            <li className="highlighted" key={item.id}
                                onMouseEnter={e => e.target.classList.add("hovered")}
                                onMouseLeave={e => e.target.classList.remove("hovered")}
                            >
                                <div>
                                    <button className="delete" onClick={() => deleteIncome(item.id)}>❌</button>
                                    <span className="description">{item.description}</span>
                                </div>
                                <span className="value">+{item.value}</span>
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}
