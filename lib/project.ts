import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project } from "@/types/project";

export const getProjects = (category: string = "all"): Project[] => {
    const project_dir = path.join(process.cwd(), "content", "projects" );
    const file_names = fs.readdirSync(project_dir);

    const projects: Project[] = file_names.map((file_name) => {
        const cu_dir = path.join(project_dir, file_name);
        const content = fs.readFileSync(cu_dir, "utf-8");
        const parsed = matter(content);

        return {
            id: file_name.replace(".md", ""),
            ...parsed.data,
            content: parsed.content,
        } as Project
    })
    projects.sort((a, b) => (a.date < b.date ? 1 : -1));
    if (category !== "all") {
        return projects.filter((project: Project) => {
            return project.category === category;
        })
    }
    return projects
}