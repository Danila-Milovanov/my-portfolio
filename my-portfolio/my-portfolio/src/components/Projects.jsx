import { motion } from "framer-motion";


export default function Projects() {
const data = [
{ title: "Portfolio Website", desc: "A sleek portfolio built with React.", link: "#" },
{ title: "Todo App", desc: "A todo manager using localStorage.", link: "#" },
{ title: "Weather App", desc: "Real-time weather using API.", link: "#" }
];


return (
<section className="max-w-5xl mx-auto p-10">
<h2 className="text-4xl font-bold mb-6">Projects</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{data.map((p, i) => (
<motion.div
key={i}
className="bg-slate-800 p-6 rounded-2xl shadow-lg"
whileHover={{ scale: 1.04 }}
>
<h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
<p className="text-slate-400 mb-4">{p.desc}</p>
<a href={p.link} className="text-blue-400 hover:underline">View Project</a>
</motion.div>
))}
</div>
</section>
);
}