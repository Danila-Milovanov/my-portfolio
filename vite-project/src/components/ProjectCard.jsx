export default function ProjectCard({ title, desc, link }) {
return (
<a
href={link}
target="_blank"
className="block p-5 rounded-xl border border-neutral-800 hover:border-neutral-600 transition"
>
<h3 className="text-lg font-semibold mb-2">{title}</h3>
<p className="text-neutral-400 text-sm">{desc}</p>
</a>
);
}