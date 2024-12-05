import styles from "../../page.module.css";
import {IconInfoCircleFilled} from "@tabler/icons-react";

export default function VerbInfo({infinitive, present, past, translation}) {

    if (!infinitive) return <div></div>

    return (
        <>

            <div className={styles.word_info}>
                <div className={styles.info_icon}><IconInfoCircleFilled size={28} color="#2dc653"/></div>

                <div className={styles.info_item}>
                    <label>Инфинитив:</label>
                    <span>{infinitive} ({translation})</span>
                </div>
                <div className={styles.info_item}>
                    <label>3 лицо наст. время:</label>
                    <span>{present}</span>
                </div>
                <div className={styles.info_item}>
                    <label>3 лицо прош. время:</label>
                    <span>{past}</span>
                </div>
                {/*<div className={styles.info_item}>
                    <label>Перевод:</label>
                    <span>{translation}</span>
                </div>*/}


            </div>


        </>
    );
}