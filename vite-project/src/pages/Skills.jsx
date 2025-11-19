export default function Skills() {
const skills = ["JavaScript", "React", "Node.js", "Tailwind", "Git"];


return (
<section className="space-y-6">
<h1 className="text-3xl font-bold">Skills</h1>
<ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-neutral-300">
{skills.map((s) => (
<li
key={s}
className="px-4 py-2 border border-neutral-800 rounded-lg text-center"
>
{s}
</li>
))}
</ul>
</section>
);
}