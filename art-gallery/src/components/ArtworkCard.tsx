import type { Artwork } from "@/types/artwork";
export default function ArtworkCard({ artwork }: { artwork: Artwork }) {
    return (
        <div>
            <img src={artwork.images.web.url} alt={artwork.title} width={200} />
            <p>{artwork.title}</p>
            <p>{artwork.creators.map((creator) => creator.description).join("、")}</p>
        </div>
    )
}