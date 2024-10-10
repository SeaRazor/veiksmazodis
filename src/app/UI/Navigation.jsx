'use client';
import styles from "@/app/page.module.css";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navigation() {
    const pathname = usePathname();

    function hamburgerClickHandler(event) {
        const hamburger = document.querySelector('.logo');
        const navMenu = document.querySelector('.menu');
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    return <menu className={styles.menu}>
        <header>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Link href="/"><img src="/lithuania_64.png"/></Link>
                </div>
                <div className={styles.hamburger} onClick={hamburgerClickHandler}>
                    <span>sfsdf</span>
                    <span>dfss</span>
                </div>
                <ul className={styles.menu}>

                    <div className={styles.menu_item}>
                        <Link href="/verbs" className={pathname == '/verbs' ? 'active' : ''}>Veiksmažodžiai</Link>
                    </div>
                    <div className={styles.menu_item}>
                        <Link href="/cases" className={pathname == '/cases' ? 'active' : ''}>Linksniai</Link>
                    </div>
                </ul>
            </nav>
        </header>


    </menu>;
}