import type { Artwork } from "@/types/artwork";
import styles from "./ArtworkCard.module.css";
export default function ArtworkCard({ artwork }: { artwork: Artwork }) {
    return (
        <div className={styles.card}>
            <img src={artwork.images.web.url} alt={artwork.title} className={styles.image} />
            <p className={styles.title}>{artwork.title}</p>
            <p className={styles.artist}>{artwork.creators.map((creator) => creator.description).join("、")}</p>
        </div>
    )
}