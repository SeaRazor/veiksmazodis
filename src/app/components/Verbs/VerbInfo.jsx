"use client";
import styles from "../../page.module.css";

export default function VerbInfo({infinitive, present, past, translation}) {

    if (!infinitive) return <div></div>
    return (
        <>
            <div className={styles.word_info}>

                <div className={styles.verb_header}>
                    <div className={styles.card}>{infinitive ??
                        <span className={styles.verb_type_name}>Инфинитив</span>}
                        <span className={styles.tooltip}>{translation}</span>
                    </div>
                </div>

                <div className={styles.verb_header}>

                    <div className={styles.card}>{present ??
                        <span className={styles.verb_type_name}>Настоящее</span>}

                    </div>

                </div>
                <div className={styles.verb_header}>

                    <div className={styles.card}>{past ??
                        <span className={styles.verb_type_name}>Прошедшее</span>}
                        
                    </div>

                </div>


            </div>


        </>
    );
}