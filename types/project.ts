export type Project = {
    id: string;
    title: string;
    description: string;
    youtubeId?: string;
    thumbnail_url?: string;
    date: string;
    category: string;
    tags?: string[];
    photos?: string[];
    content: string;
}