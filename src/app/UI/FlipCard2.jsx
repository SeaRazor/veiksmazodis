import styles from './ui.module.css'

export default function FlipCard2({front, back, direction = "forward"}) {


    return (

        <div className={styles.flipCard2}>
            <div className={styles.cardFront2}>{direction == "forward" ? front : back}</div>
            <div className={styles.cardBack2}>{direction == "forward" ? back : front}</div>
        </div>
    );
}