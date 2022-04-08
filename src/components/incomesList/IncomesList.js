import { useState } from "react";
// styles
import "./IncomesList.css";
// hooks
import { useBudgetContext } from "../../hooks/useBudgetContext";
import { useIncomes } from "../../hooks/useIncomes";

export default function IncomesList() {
    const { listOfIncome } = useBudgetContext()
    const { deleteIncome } = useIncomes()
    const [style, setStyle] = useState({ display: 'none' });

    return (
        <div className="transactions-list incomes">
            <h4>INCOMES</h4>
            <ul>
                {listOfIncome && listOfIncome.map((item, i) => {
                    if (i % 2 === 0) {
                        return (
                            <li key={item.id}>
                                <div>
                                    <button className="delete">❌</button>
                                    <span className="description">{item.description}</span>
                                </div>
                                <span className="value">+{item.value}</span>
                            </li>
                        )
                    } else {
                        return (
                            <li className="highlight" key={item.id}>
                                <div>
                                    <button className="delete">❌</button>
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
