import {getProjects} from "@/lib/project";

export default function ProjectsPage(){
    const projects = getProjects();

    return (
        <div>
            <h1>Projects Page</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <ul>{project.title}</ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}