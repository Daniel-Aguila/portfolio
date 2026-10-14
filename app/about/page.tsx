export default function AboutPage() {
    return (
        <article className="max-w-2xl pt-8">
            <h1 className="text-4xl font-semibold font-stretch-expanded sm:text-5xl">About</h1>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-tin">
                <p>
                    I&apos;m Daniel, a software developer at Atser Systems and an MS Computer
                    Science student at UT Austin, focused on systems. I earned my BS in Computer
                    Science at the University of Houston.
                </p>
                <p>
                    Most of my favorite work happens close to the hardware: operating system
                    internals, virtualization, GPU programming, and microcontrollers. At work I
                    build mobile and backend software for a construction materials testing
                    platform, while taking graduate courses in operating systems, parallel
                    systems, and virtualization.
                </p>
                <p>
                    Outside of work and school, I run{" "}
                    <a href="https://www.youtube.com/@LowCapy" target="_blank" className="text-copper hover:underline">
                        LowCapy
                    </a>
                    , a YouTube channel where I make videos explaining Rust and systems concepts and
                    showcase my own projects. One of them is Capybara OS, a small x86-64 kernel in
                    Rust I&apos;m building to learn how an operating system works by writing one.
                </p>
                <p>
                    Before all this, I was a machine learning intern at Rice University&apos;s
                    Aiden Lab, working on genomic data.
                </p>
                <p>
                    Away from the keyboard, I train Muay Thai and boxing, swim, hike, and take
                    photos along the way. I like to cook, and I&apos;m always learning languages:
                    I speak English, Spanish, and Japanese, and I&apos;m working on Korean.
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