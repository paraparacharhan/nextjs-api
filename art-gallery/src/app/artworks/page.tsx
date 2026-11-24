"use client";
import { useEffect, useState } from "react";
import { fetchArtworks } from "@/clients/artApi";
import type { Artwork } from "@/types/artwork";
import ArtworkCard from "@/components/ArtworkCard";
import Pagination from "@/components/Pagination";
import styles from "./page.module.css";
export default function ArtworksPage() {
    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState("");
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        async function load() {
            setArtworks(await fetchArtworks(page, query));
        }
        load();
    }, [page, query]);
    return (
        <main className={styles.main}>
            <h1>作品一覧</h1>
            <div>
                <input type="text" value={keyword} onChange={e => setKeyword(e.target.value)} />
                <button type="button" onClick={() => {
                    setQuery(keyword);
                    setPage(1);
                }}>検索</button>
            </div>
            <div className={styles.grid}>
                {artworks.map((artwork) => (
                    <ArtworkCard key={artwork.id} artwork={artwork} />
                ))}
            </div>
            <div>
                <Pagination page={page} onChange={setPage} />
            </div>
        </main >
    );
}