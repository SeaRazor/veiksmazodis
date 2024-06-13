"use client";
import styles from "../../page.module.css";
import {useState} from "react";

export default function VerbInfo({infinitive, present, past, translation}) {
    const [translationVisible, setTranslationVisible] = useState(false);


    function handleTranslationClick() {
        setTranslationVisible((current) => !current);
    }

    const translationMarkup = translationVisible
        ? translation
        : <span>Перевод</span>

    return (
        <>
            <div className={styles.word_info}>
                <div className={styles.verb_header}>

                    <div className={styles.card}>{infinitive ??
                        <span className={styles.verb_type_name}>Инфинитив</span>}</div>
                </div>
                <div className={styles.verb_header}>

                    <div className={styles.card}>{present ??
                        <span className={styles.verb_type_name}>Настоящее</span>}</div>
                </div>
                <div className={styles.verb_header}>

                    <div className={styles.card}>{past ??
                        <span className={styles.verb_type_name}>Прошедшее</span>}</div>
                </div>
                {infinitive && <div className={styles.verb_header} onClick={handleTranslationClick}>
                    <div className={styles.translation}> {translationMarkup}</div>
                </div>}


            </div>


        </>
    );
}