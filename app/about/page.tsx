export default function AboutPage() {
    return (
        <article className="max-w-2xl pt-8">
            <h1 className="text-4xl font-semibold font-stretch-expanded sm:text-5xl">About</h1>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-tin">
                <p>
                    I'm Daniel, a software developer at Atser Systems and an MS Computer Science
                    student at UT Austin, focused on systems.
                </p>
                <p>
                    Most of my favorite work happens close to the hardware: operating system
                    internals, virtualization, GPU programming, and microcontrollers. At work I
                    build mobile and backend software for a construction materials testing
                    platform.
                </p>
                <p>
                    Before that, I was a machine learning intern at Rice University's Aiden Lab,
                    working on genomic data. I speak English, Spanish, Japanese, and some Korean.
                </p>
            </div>

            <a
                href="/Daniel_Aguila_Resume.pdf"
                target="_blank"
                className="mt-10 inline-block rounded-md bg-copper px-5 py-2.5 font-semibold text-board hover:opacity-90"
            >
                Download resume
            </a>
        </article>
    );
}