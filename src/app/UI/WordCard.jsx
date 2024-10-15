import styles from "@/app/page.module.css";

export default function WordCard({word, hint}) {
    
    return (
        <div className={styles.word_card}>
            <span>{word}</span>
            {hint && <span className={styles.tooltip}>{hint}</span>}
        </div>
    );
}