"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchArtwork } from "@/clients/artApi";
import type { Artwork } from "@/types/artwork";
export default function ArtworkDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [artwork, setArtwork] = useState<Artwork>();
    useEffect(() => {
        async function load() {
            setArtwork(await fetchArtwork(id));
        }
        load();
    }, [id]);

    if (!artwork) {
        return <main>読み込み中...</main>;
    }
    return (
        <main>
            <h1>{artwork.title}</h1>
            <img src={artwork.images.web.url} alt={artwork.title} width={480} />
            <p>{artwork.creators.map((creator) => creator.description).join("、")}</p>
        </main>
    );
}
