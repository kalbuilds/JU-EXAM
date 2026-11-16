
import './MenuBar.css';

import {
    House,
    Files,
    CalendarDays,
    CircleUserRound,
    Bot
} from "lucide-react";

function MenuBar() {
    return (
        <div className="menu-bar">
            <House />

            <Files className="active" />

            <Bot />

            <CalendarDays />

            <CircleUserRound />
        </div>
    );
}

export default MenuBar;
