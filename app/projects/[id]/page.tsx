import { getProject } from "@/lib/project";
import { notFound } from "next/navigation";
import YouTubeEmbed from "@/app/components/YoutubeEmbed";
import Markdown from "react-markdown";
import Link from "next/link";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = getProject(id);

    if (!project) {
        notFound();
    }

    const tags = project.tags?.join(", ");

    return (
        <article className="pt-8">
            <Link href="/projects" className="text-sm text-tin hover:text-silk">
                Back to projects
            </Link>

            <h1 className="mt-6 text-4xl leading-tight font-semibold font-stretch-expanded sm:text-5xl">
                {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-tin">{project.description}</p>
            <p className="mt-4 text-sm text-tin">
                {project.category}, {project.date}
                {tags && <>, {tags}</>}
            </p>

            {project.youtubeId && (
                <div className="mt-10">
                    <YouTubeEmbed id={project.youtubeId}/>
                </div>
            )}

            <div className="prose prose-invert mt-12 max-w-3xl prose-a:text-copper prose-headings:font-stretch-semi-expanded">
                <Markdown>{project.content}</Markdown>
            </div>
        </article>
    );
}