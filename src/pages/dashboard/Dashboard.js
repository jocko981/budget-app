// styles
import "./Dashboard.css";
// components
import CreateTransaction from "../../components/createTransaction/CreateTransaction";
import IncomesList from "../../components/incomesList/IncomesList";
import ExpensesList from "../../components/expensesList/ExpensesList";

export default function Dashboard() {

    return (
        <div className="dashboard">
            <CreateTransaction />
            <div className="transactions-list-wrap">
                <IncomesList />
                <ExpensesList />
            </div>
        </div>
    )
}
