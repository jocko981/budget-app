// styles
import "./Dashboard.css";
// components
import CreateTransaction from "../../components/createTransaction/CreateTransaction";

export default function Dashboard() {
    // const { user } = useAuthContext();

    return (
        <div className="dashboard">
            Dashboard
            <CreateTransaction />
        </div>
    )
}
