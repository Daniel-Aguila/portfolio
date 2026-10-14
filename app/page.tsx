import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/lib/project";
import ProjectCard from "@/app/components/ProjectCard";

export default function HomePage() {
  const recentProjects = getProjects().slice(0, 3);

  return (
      <>
        <section className="pt-16 pb-16">
          <Image
              src="/dani_pic.jpg"
              alt="Daniel Aguila"
              width={96}
              height={96}
              priority
              className="mb-8 h-20 w-20 rounded-full border border-trace object-cover"
          />
          <h1 className="text-5xl leading-tight font-semibold font-stretch-expanded sm:text-6xl">
            Beep boop beep.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-tin">
            I build firmware, kernels, and GPU code. MS Computer Science at UT Austin,
            software developer at Atser Systems.
          </p>
          <div className="mt-8 flex gap-4">
            <a
                href="/Daniel_Aguila_Resume.pdf"
                target="_blank"
                className="rounded-md bg-copper px-5 py-2.5 font-semibold text-board hover:opacity-90"
            >
              Resume
            </a>
            <Link
                href="/projects"
                className="rounded-md border border-trace px-5 py-2.5 font-semibold hover:border-copper"
            >
              Projects
            </Link>
          </div>
          <p className="mt-6 text-sm text-tin">
            I also explain Rust and systems concepts on{" "}
            <a
                href="https://www.youtube.com/@LowCapy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper hover:underline"
            >
              LowCapy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-sm text-tin">Recent projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {recentProjects.map(project => (
                <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </section>
      </>
  );
}