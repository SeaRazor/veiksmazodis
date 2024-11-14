import styles from "@/app/page.module.css";
import FlipCard from "@/app/UI/FlipCard";

export default function NounInfo({noun, translation}) {

    if (!noun) return <div></div>

    return (
        <>
            <div className={styles.word_info}>
                <FlipCard front={noun} back={translation}/>

            </div>

        </>
    );
}
