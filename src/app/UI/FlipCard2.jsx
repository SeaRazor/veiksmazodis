import styles from './ui.module.css'
import {useEffect, useState} from "react";

export default function FlipCard2({front, back, direction = "forward"}) {
    const [flipped, setFlipped] = useState(false);

    function handleFlip() {
        setFlipped(prevState => !prevState);
    }

    useEffect(() => {
        if (flipped == true) {
            const timer = setTimeout(() => {
                setFlipped(false);
            }, 2000);
            return () => clearTimeout(timer);
        }

    }, [flipped])

    return (

        <div className={`${styles.flipCard2}  ${flipped ? styles.flipped2 : ''}`} onClick={handleFlip}>
            <div className={styles.cardFront2}>{direction == "forward" ? front : back}</div>
            <div className={styles.cardBack2}>{direction == "forward" ? back : front}</div>
        </div>
    );
}