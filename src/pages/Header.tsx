
import "./Header.css";
import { Bell, Search } from "lucide-react";

function Header() {
    return (
        <header>
            <div>
                <p className="greeting">Good Morning!</p>
                <h2>Kaleab Sintayehu</h2>
            </div>

            <div className="header-icons">
                <Bell size={20} />
                <Search size={20} />
            </div>
        </header>

    );
}


export default Header;
