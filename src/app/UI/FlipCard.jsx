import styles from './ui.module.css'
import {useEffect, useState} from "react";
import {IconCircleCheckFilled, IconCircleXFilled} from "@tabler/icons-react";

export default function FlipCard({front, back, direction = "forward", checkResult}) {
    const [flipped, setFlipped] = useState(false);

    function handleFlip() {
        setFlipped(prevState => !prevState);
    }

    useEffect(() => {
        if (flipped === true) {
            const timer = setTimeout(() => {
                setFlipped(false);
            }, 2000);
            return () => clearTimeout(timer);
        }

    }, [flipped]);

    const isMarked = checkResult !== (null, undefined);


    return (

        <div className={`${styles.flipCard}   ${flipped ? styles.flipped : ''}`}
             onClick={handleFlip}>
            <div className={`${styles.cardFront}`}>
                <span>{direction === "forward" ? front : back}</span>
                {isMarked && <div className={styles.marked}>
                    {checkResult ? <IconCircleCheckFilled size={24} color="teal"/> :
                        <IconCircleXFilled size={24} color="#e4405f"/>}
                </div>}
            </div>
            <div className={styles.cardBack}>{direction === "forward" ? back : front}</div>
        </div>
    );
}