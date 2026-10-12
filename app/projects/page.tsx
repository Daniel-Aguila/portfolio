import { getProjects } from "@/lib/project";
import ProjectCard from "@/app/components/ProjectCard";

export default function ProjectsPage() {
    const projects = getProjects();

    return (
        <div>
            <h1 className="text-5xl">Projects Page</h1>
            <div>
                {projects.map(project => (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </div>
        </div>
    );
}