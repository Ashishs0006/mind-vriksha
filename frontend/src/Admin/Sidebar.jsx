import { Link } from "react-router-dom";
import logo from '../assets/Images/Hero.png';

function Sidebar() {
    return (
        <aside className="bg-primary-green text-light-green w-64 h-screen fixed top-0 left-0 flex flex-col">
            <div className="p-6 mb-4 flex items-center">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
                {/* Optionally add site/admin name here */}
            </div>
            <div className="font-bold text-xl p-6 mb-4">Admin Panel</div>
            <nav className="flex-1">
                <ul>
                    <li>
                        <Link to="/admin/dashboard" className="block px-6 py-3 hover:bg-secondary-green">Dashboard</Link>
                    </li>
                    {/* Add more links as you add features */}
                </ul>
            </nav>
            <div className="p-6 mt-auto">
                {/* Place for user info or logout */}
            </div>
        </aside>
    );
}
export default Sidebar;
