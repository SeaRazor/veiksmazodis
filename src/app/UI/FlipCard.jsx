import styles from './ui.module.css'
import {useEffect, useState} from "react";
import {IconAlertCircleFilled, IconCircleCheckFilled, IconCircleXFilled} from "@tabler/icons-react";

export default function FlipCard({front, back, direction = "forward", checkResult, comment}) {
    const [flipped, setFlipped] = useState(false);
    const displayWord = direction === "forward" ? front : back;
    const displayText = comment ? displayWord + ' (' + comment + ')' : displayWord;

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
    let resultIcon;
    switch (checkResult) {
        case 'correct':
            resultIcon = <IconCircleCheckFilled size={24} color="teal"/>;
            break;
        case 'incorrect':
            resultIcon = <IconCircleXFilled size={24} color="#e4405f"/>;
            break;
        case 'warning':
            resultIcon = <IconAlertCircleFilled size={24} color="#eeba0b"/>;
            break;
        default:
    }

    return (

        <div className={`${styles.flipCard}   ${flipped ? styles.flipped : ''}`}
             onClick={handleFlip}>
            <div className={`${styles.cardFront}`}>
                <span>{displayText}</span>
                {/*   {isMarked && <div className={styles.marked}>
                    {checkResult && resultIcon}
                </div>}*/}
            </div>
            <div className={styles.cardBack}>{direction === "forward" ? back : front}</div>
        </div>
    );
}