"use client";
import { useEffect, useState } from "react";
import { fetchArtworks } from "@/clients/artApi";
import type { Artwork } from "@/types/artwork";
export default function ArtworksPage() {
    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState("");
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    useEffect(() => {
        async function load() {
            setArtworks(await fetchArtworks(page));
        }
        load();
    }, [page]);
    return (
        <main>
            <h1>作品一覧</h1>
            <div>
                <input type="text" value={keyword} onChange={e => setKeyword(e.target.value)} />
                <p>「{keyword}」で検索します</p>
            </div>
            <div>
                <button type="button" onClick={() => setPage(page - 1)} disabled={
                    page === 1
                }>前へ</button>
                <span>{page} ページ目</span>
                <button type="button" onClick={() => setPage(page + 1)}>次へ</button>
            </div>
        </main>
    );
}