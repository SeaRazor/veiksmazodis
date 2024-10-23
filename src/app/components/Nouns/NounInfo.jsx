import styles from "@/app/page.module.css";
import FlipCard2 from "@/app/UI/FlipCard2";

export default function NounInfo({noun, translation}) {

    if (!noun) return <div></div>

    return (
        <>
            <div className={styles.word_info}>
                <FlipCard2 front={noun} back={translation}/>

            </div>

        </>
    );
}
