import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>Art Gallery</h1>
      <p>クリープランド美術館の作品を見られるサイトです。</p>
      <ul>
        <li><Link href="/artworks">作品一覧</Link></li>
        <li><Link href="/about">このサイトについて</Link></li>
      </ul>
    </main>
  );
}