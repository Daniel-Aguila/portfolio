import {getProjects} from "@/lib/project";
import Link from "next/link";

export default function ProjectsPage(){
    const projects = getProjects();

    return (
        <div>
            <h1 className={"text-5xl"}>Projects Page</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <Link className={"text-2xl"} href={`/projects/${project.id}`}>{project.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}