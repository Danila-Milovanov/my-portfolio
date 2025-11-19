import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";


export default function Navbar() {
const { theme, toggleTheme } = useTheme();


return (
<nav className="p-4 bg-slate-800 dark:bg-slate-900 shadow-lg flex gap-6 justify-center text-lg items-center">
<Link to="/" className="hover:text-blue-400 transition">Home</Link>
<Link to="/about" className="hover:text-blue-400 transition">About</Link>
<Link to="/projects" className="hover:text-blue-400 transition">Projects</Link>
<Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>


<button onClick={toggleTheme} className="ml-6 p-2 rounded-full hover:bg-slate-700 transition">
{theme === "dark" ? <Sun /> : <Moon />}
</button>
</nav>
);
}