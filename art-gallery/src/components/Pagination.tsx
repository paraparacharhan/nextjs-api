import styles from "./Pagination.module.css";
export default function Pagination({ page, onChange }: { page: number; onChange: (page: number) => void }) {
    return (
        <div className={styles.pagination}>
            <button type="button" onClick={() => onChange(page - 1)} disabled={
                page === 1
            }>前へ</button>
            <span className={styles.current}>{page} ページ目</span>
            <button type="button" onClick={() => onChange(page + 1)}>次へ</button>
        </div>
    )
}