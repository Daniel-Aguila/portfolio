import { getProjects } from "@/lib/project";
import ProjectCard from "@/app/components/ProjectCard";

export default function ProjectsPage() {
    const projects = getProjects();

    return (
        <div>
            <h1 className="text-4xl font-semibold font-stretch-expanded">Projects</h1>
            <p className="mt-3 mb-8 text-tin">Firmware, kernels, and systems work.</p>
            <div>
                {projects.map(project => (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </div>
        </div>
    );
}