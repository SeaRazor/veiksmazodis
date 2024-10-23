import styles from './ui.module.css'
import {useState} from "react";

export default function FlipCard({front, back}) {
    const [flipped, setFlipped] = useState(false);

    function handleFlip() {
        setFlipped(prevState => !prevState);
    }


    return (

        <div className={styles.flipCard}>
            <div className={`${styles.card}  ${flipped ? styles.flipped : ''}`} onClick={handleFlip}>
                <div className={`${styles.side} `}>{front}</div>
                <div className={`${styles.side} ${styles.back}`}>{back}</div>
            </div>

        </div>
    );
}