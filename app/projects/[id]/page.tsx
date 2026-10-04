import {getProject} from "@/lib/project";
import {notFound} from "next/navigation";

export default async function ProjectPage({params}: {params: Promise<{id: string}>}) {
    const {id} = await params;

    const project = getProject(id);
    const tags = project?.tags?.join(", ") || "";

    if (!project) {
        notFound();
        //returns a 404 error page
    }

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>

            <ul>
                <li>{project.category}</li>
                <li>{project.date}</li>
                <li>{tags}</li>
            </ul>

            <div>{project.content}</div>
        </div>
    )
}