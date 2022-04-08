// styles
import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <header>
                <h2>
                    {9999
                        ? "Let's calculate your budget!"
                        : "Budget for (month) (year):"
                    }
                </h2>
            </header>
        </div>
    )
}
