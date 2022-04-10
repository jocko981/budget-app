// styles
import "./Dashboard.css";
// hooks
import { useBudgetContext } from "../../hooks/useBudgetContext";
// components
import CreateTransaction from "../../components/createTransaction/CreateTransaction";
import IncomesList from "../../components/incomesList/IncomesList";
import ExpensesList from "../../components/expensesList/ExpensesList";

export default function Dashboard() {
    const { totalExpense, totalIncome } = useBudgetContext()

    return (
        <div className="dashboard">
            <CreateTransaction />
            {(totalExpense | totalIncome) && <div className="transactions-list-wrap">
                <IncomesList />
                <ExpensesList />
            </div>}
        </div>
    )
}
