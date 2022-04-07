// styles
import CreateTransaction from "../../components/createTransaction/CreateTransaction";
import "./Dashboard.css";

export default function Dashboard() {
    // const { user } = useAuthContext();

    return (
        <div className="dashboard">
            Dashboard
            <CreateTransaction />
        </div>
    )
}
