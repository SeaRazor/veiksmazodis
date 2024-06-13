import styles from "@/app/page.module.css";
import {useState} from "react";

export default function NounInfo({noun, gender, translation}) {

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

                    <div className={styles.card}>{noun ??
                        <span className={styles.verb_type_name}>Именительный падеж</span>}</div>
                </div>

                {translation && <div className={styles.verb_header} onClick={handleTranslationClick}>
                    <div className={styles.translation}> {translationMarkup}</div>
                </div>}


            </div>

        </>
    );
}
