"use client";
import styles from "./page.module.css";
import {ThemeProvider} from "next-themes";


export default function Home() {


    return (
        <>
            <ThemeProvider>
                <main className={styles.main}>
                </main>
            </ThemeProvider>


        </>
    );
}



