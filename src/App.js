import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
// styles
import "./App.css";
// hooks
import { useBudgetContext } from "./hooks/useBudgetContext";
// pages
import Dashboard from "./pages/dashboard/Dashboard";
// components
import Header from "./components/header/Header";

function App() {
  const { dataIsReady } = useBudgetContext()

  return (
    <div className="App">
      {dataIsReady && <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>}
    </div>
  );
}

export default App;
