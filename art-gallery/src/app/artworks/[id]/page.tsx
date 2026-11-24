"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchArtwork } from "@/clients/artApi";
import type { ArtworkDetail } from "@/types/artwork";
import Link from "next/link";
import styles from "./page.module.css";
export default function ArtworkDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [artwork, setArtwork] = useState<ArtworkDetail>();
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
            <Link href="/artworks">作品一覧</Link>
            <h1>{artwork.title}</h1>
            <img src={artwork.images.web.url} alt={artwork.title} width={480} />
            <p>{artwork.creators.map((creator) => creator.description).join("、")}</p>
            <dl className={styles.details}>
                <dt>制作年</dt>
                <dd>{artwork.creation_date}</dd>

                <dt>技法</dt>
                <dd>{artwork.technique}</dd>

                <dt>サイズ</dt>
                <dd>{artwork.measurements}</dd>

                <dt>文化圏</dt>
                <dd>{artwork.culture.map((country) => country).join("、")}</dd>
            </dl>
        </main>
    );
}
