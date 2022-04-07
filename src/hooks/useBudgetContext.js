import { useContext } from "react";
// context
import { BudgetContext } from "../context/BudgetContext";

export const useBudgetContext = () => {
    const context = useContext(BudgetContext);

    if (!context) {
        throw Error("BudgetContext must be inside and BudgetContextProvider");
    }

    return context;
}