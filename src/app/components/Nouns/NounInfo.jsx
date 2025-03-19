import styles from "@/app/page.module.css";
import {IconInfoCircleFilled} from "@tabler/icons-react";

export default function NounInfo({noun, translation, gender}) {

    if (!noun) return <div></div>

    return (
        <>
            <div className={styles.word_info}>
                <div className={styles.info_icon}><IconInfoCircleFilled size={24} color="#2dc653"/></div>
                <div className={styles.info_item}>
                    <label>Именительный падеж:</label>
                    <span>{noun} ({translation})</span>
                </div>
                {/*  <div className={styles.info_item}>
                    <label>Перевод:</label>
                    <span>{translation}</span>
                </div>*/}
                <div className={styles.info_item}>
                    <label>Род:</label>
                    <span>{gender === 'm' ? "мужской" : "женский"}</span>
                </div>

            </div>

        </>
    );
}
