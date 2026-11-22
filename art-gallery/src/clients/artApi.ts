import type { Artwork } from "@/types/artwork";
const API = "https://openaccess-api.clevelandart.org/api/artworks";
const LIST_FIELDS = "id,title,creators,images";
const LIMIT = 12;
async function getData<T>(url: string): Promise<T> {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`API の呼び出しに失敗しました（${res.status}）`);
    }
    const json: { data: T } = await res.json();
    return json.data;
}
export function fetchArtworks(page: number): Promise<Artwork[]> {
    const offset = (page - 1) * LIMIT;
    return getData<Artwork[]>(`${API}/?skip=${offset}&limit=${LIMIT}&has_image=1&fields=${LIST_FIELDS}`);
}