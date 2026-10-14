const links = [
    { label: "Email", value: "dbaguilasifuentes@utexas.edu", href: "mailto:dbaguilasifuentes@utexas.edu" },
    { label: "LinkedIn", value: "linkedin.com/in/aguiladaniel", href: "https://linkedin.com/in/aguiladaniel" },
    { label: "GitHub", value: "github.com/Daniel-Aguila", href: "https://github.com/Daniel-Aguila" },
    { label: "YouTube", value: "LowCapy", href: "YOUR_CHANNEL_URL" },
];

export default function ContactPage() {
    return (
        <article className="max-w-2xl pt-8">
            <h1 className="text-4xl font-semibold font-stretch-expanded sm:text-5xl">Contact</h1>
            <p className="mt-6 text-lg leading-relaxed text-tin">
                Open to embedded and systems internships. Email is the fastest way to reach me.
            </p>

            <ul className="mt-10 border-t border-trace">
                {links.map(link => (
                    <li key={link.label} className="flex justify-between border-b border-trace py-4">
                        <span className="text-tin">{link.label}</span>
                        <a href={link.href} target="_blank" className="hover:text-copper">
                            {link.value}
                        </a>
                    </li>
                ))}
            </ul>
        </article>
    );
}