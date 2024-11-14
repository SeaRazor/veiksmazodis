import styles from './ui.module.css'

export function Progress(props) {


    const correctWidth = Math.ceil((props.correctNum / props.total) * 100);
    const incorrectWidth = Math.ceil((props.incorrectNum / props.total) * 100);
    const totalWidth = 100 - correctWidth - incorrectWidth;
    const rest = props.total - props.correctNum - props.incorrectNum;
    return (
        <div className={styles.progress_wrapper}>
            {correctWidth > 0 &&
                <div className={styles.progress_correct}
                     style={{width: `${correctWidth}%`}}>{correctWidth > 0 && props.correctNum}</div>}
            {incorrectWidth > 0 && <div className={styles.progress_incorrect}
                                        style={{width: `${incorrectWidth}%`}}>{incorrectWidth > 0 && props.incorrectNum}</div>}

            {totalWidth > 1 && <div className={styles.progress_total} style={{width: `${totalWidth}%`}}>{rest}</div>}


        </div>
    );
}
