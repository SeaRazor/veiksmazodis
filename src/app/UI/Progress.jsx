import styles from './ui.module.css'
import {useState} from "react";

export function Progress({correctNum, incorrectNum, warningNum, total, handleFilterBy}) {


    const correctWidth = Math.ceil((correctNum / total) * 100);
    const incorrectWidth = Math.ceil((incorrectNum / total) * 100);
    const warningWidth = Math.ceil((warningNum / total) * 100);
    const totalWidth = 100 - correctWidth - incorrectWidth - warningWidth;
    const rest = total - correctNum - incorrectNum - warningNum;

    const [isFilteredBy, setFilteredBy] = useState('');

    function handleFilterClick(e) {
        if (!handleFilterBy) return;
        if (!isFilteredBy || isFilteredBy !== e.target.id) {
            setFilteredBy(e.target.id);
            handleFilterBy(e.target.id);
        } else {
            setFilteredBy('');
            handleFilterBy('')
        }


    }


    return (
        <div className={styles.progress_wrapper}>
            {correctWidth > 0 &&
                <div id="correct"
                     className={`${styles.progress_correct} ${isFilteredBy === 'correct' ? styles.correct_filtered : ''}`}
                     style={{width: `${correctWidth}%`}}
                     onClick={handleFilterClick}
                >{correctWidth > 0 && correctNum}</div>}
            {incorrectWidth > 0 &&
                <div id="incorrect"
                     className={`${styles.progress_incorrect} ${isFilteredBy === 'incorrect' ? styles.incorrect_filtered : ''}`}
                     style={{width: `${incorrectWidth}%`}}
                     onClick={handleFilterClick}>{incorrectWidth > 0 && incorrectNum}</div>}
            {warningWidth > 0 &&
                <div id="warning"
                     className={`${styles.progress_warning} ${isFilteredBy === 'warning' ? styles.warning_filtered : ''}`}
                     style={{width: `${warningWidth}%`}}
                     onClick={handleFilterClick}>{warningWidth > 0 && warningNum}</div>}

            {totalWidth > 0 && <div className={styles.progress_total} style={{width: `${totalWidth}%`}}>{rest}</div>}


        </div>
    );
}
