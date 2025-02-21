import styles from './ui.module.css'

export default function WordCard({word, comment}) {
    let displayText; /*= comment ? word + '(' + comment + ')' : word;*/
    if (comment) {
        displayText = word + '(' + comment + ')';
    } else {
        displayText = word;
    }
    return (
        <div className={styles.word_card}>
            <span>{displayText}</span>

        </div>
    );
}
