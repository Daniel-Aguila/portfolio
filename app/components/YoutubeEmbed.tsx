export default function YouTubeEmbed({ id }: { id: string }) {
    return (
        <div className="aspect-video w-full overflow-hidden rounded-lg border border-trace">
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${id}`}
                title="Project video"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}