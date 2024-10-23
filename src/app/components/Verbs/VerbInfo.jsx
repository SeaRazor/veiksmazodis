"use client";
import styles from "../../page.module.css";
import WordCard from "@/app/UI/WordCard";
import FlipCard2 from "@/app/UI/FlipCard2";

export default function VerbInfo({infinitive, present, past, translation}) {

    if (!infinitive) return <div></div>
    return (
        <>
            <div className={styles.word_info}>


                <FlipCard2 front={infinitive} back={translation}/>
                <WordCard word={present}/>
                <WordCard word={past}/>


            </div>


        </>
    );
}