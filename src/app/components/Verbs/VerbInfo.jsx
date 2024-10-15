"use client";
import styles from "../../page.module.css";
import WordCard from "@/app/UI/WordCard";

export default function VerbInfo({infinitive, present, past, translation}) {

    if (!infinitive) return <div></div>
    return (
        <>
            <div className={styles.word_info}>

                <WordCard word={infinitive} hint={translation}/>
                <WordCard word={present}/>
                <WordCard word={past}/>


            </div>


        </>
    );
}