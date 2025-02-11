import styles from './ui.module.css'

export default function WordCard({word, comment}) {
    const displayText = comment ? word + '(' + comment + ')' : word;
    return (
        <div className={styles.word_card}>
            <span>{displayText}</span>

        </div>
    );
}
