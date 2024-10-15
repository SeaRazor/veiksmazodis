import styles from "@/app/page.module.css";
import WordCard from "@/app/UI/WordCard";

export default function NounInfo({noun, gender, translation}) {

    if (!noun) return <div></div>

    return (
        <>
            <div className={styles.word_info}>
                <WordCard word={noun} hint={translation}/>
            </div>

        </>
    );
}
