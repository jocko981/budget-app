// styles
import "./Dashboard.css";
// components
import CreateTransaction from "../../components/createTransaction/CreateTransaction";
import IncomesList from "../../components/incomesList/IncomesList";
import ExpensesList from "../../components/expensesList/ExpensesList";

export default function Dashboard() {

    return (
        <div className="dashboard">
            Dashboard
            <CreateTransaction />
            <div className="transaction-lists">
                <IncomesList />
                <ExpensesList />
            </div>
        </div>
    )
}
