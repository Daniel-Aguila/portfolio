import Link from "next/link";
import type { Project } from '@/types/project';

export default function ProjectCard({project}: {project: Project}){
    return (
        <article className="border-t border-trace py-6">
            <Link href={`/projects/${project.id}`} className="text-xl font-semibold font-stretch-semi-expanded hover:text-copper">
                {project.title}
            </Link>
            <p className="mt-2 leading-relaxed text-tin">
                {project.category}, {project.date}
            </p>
            <p className="mt-3 text-sm text-tin">
                {project.description}
            </p>
        </article>
    )
}