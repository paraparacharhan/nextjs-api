export default function Pagination({ page, onChange }: { page: number; onChange: (page: number) => void }) {
    return (
        <div>
            <button type="button" onClick={() => onChange(page - 1)} disabled={
                page === 1
            }>前へ</button>
            <span>{page} ページ目</span>
            <button type="button" onClick={() => onChange(page + 1)}>次へ</button>
        </div>
    )
}