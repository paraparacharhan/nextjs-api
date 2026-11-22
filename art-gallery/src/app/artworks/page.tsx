"use client";
import { useState } from "react";
export default function ArtworksPage() {
    const [page, setPage] = useState(1);
    const [moment, setMoment] = useState("");
    return (
        <main>
            <h1>作品一覧</h1>
            <div>
                <input type="text" value={moment} onChange={e => setMoment(e.target.value)} />
                <p>「{moment}」で検索します</p>
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