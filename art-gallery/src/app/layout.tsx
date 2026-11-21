import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
export const metadata: Metadata = {
  title: "Art Gallery",
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja">
      <body>
        <header>
          <Link href="/">Art Gallery</Link>
        </header>
        {children}
      </body>
    </html>
  );
}