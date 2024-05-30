"use client";
import styles from "../page.module.css";
import {IconHelpOctagon} from "@tabler/icons-react"
import {useState} from "react";

export default function Verb({infinitive, present, past, translation}) {
    const [translationVisible, setTranslationVisible] = useState(false);


    function handleTranslationClick() {
        setTranslationVisible((current) => !current);
    }

    const translationMarkup = translationVisible
        ? translation
        : <div title="Перевод"><IconHelpOctagon size={24} className={styles.hoveredIcon}/></div>;
    return (
        <>
            <div className={styles.flow}>
                <div className={styles.card} style={{backgroundColor: '#f5ea84'}}>{infinitive}</div>
                <div className={styles.card} style={{backgroundColor: '#f5ea84'}}>{present}</div>
                <div className={styles.card} style={{backgroundColor: '#f5ea84'}}>{past}</div>
                <div onClick={handleTranslationClick} className={styles.translation}> {translationMarkup}</div>


            </div>

        </>
    );
}