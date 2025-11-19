import { Link, useLocation } from "react-router-dom";


export default function Navbar() {
const { pathname } = useLocation();
const linkClass = (path) =>
pathname === path ? "text-white" : "text-neutral-400 hover:text-white";


return (
<nav className="border-b border-neutral-800 py-4 px-6">
<div className="max-w-4xl mx-auto flex items-center justify-between">
<Link className="text-xl font-semibold" to="/">Portfolio</Link>


<div className="flex gap-6 text-sm">
<Link className={linkClass("/")} to="/">Home</Link>
<Link className={linkClass("/about")} to="/about">About</Link>
<Link className={linkClass("/projects")} to="/projects">Projects</Link>
<Link className={linkClass("/skills")} to="/skills">Skills</Link>
<Link className={linkClass("/contact")} to="/contact">Contact</Link>
</div>
</div>
</nav>
);
}