import { motion } from "framer-motion";


export default function Home() {
return (
<section className="max-w-4xl mx-auto p-10 text-center">
<motion.h1
className="text-5xl font-bold mb-6"
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
>
Hi, I'm a Software Developer
</motion.h1>


<motion.p
className="text-xl text-slate-300"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.4 }}
>
Building clean, modern applications with React+Vite and TailwindCSS for websites and bla bla bla.
</motion.p>
</section>
);
}