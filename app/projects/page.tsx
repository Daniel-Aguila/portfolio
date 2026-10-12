import {getProjects} from "@/lib/project";
import Link from "next/link";
import ProjectCard from "@/app/components/ProjectCard";

export default function ProjectsPage(){
    const projects = getProjects();

    return (
        <div>
            <h1 className={"text-5xl"}>Projects Page</h1>
            <ul>
                {projects.map(project => (
                    <ProjectCard project={project} key={project.id}/>
                ))}
            </ul>
        </div>
    )
}