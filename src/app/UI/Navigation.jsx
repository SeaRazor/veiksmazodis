'use client';
import styles from "@/app/page.module.css";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navigation() {
    const pathname = usePathname();

    return <menu className={styles.menu}>
        <img src="/lithuania_64.png"/>
        <div className={styles.menu_item}>
            <Link href="/verbs" className={pathname == '/verbs' ? 'active' : ''}>Veiksmažodžiai</Link>
        </div>
        <div className={styles.menu_item}>
            <Link href="/cases" className={pathname == '/cases' ? 'active' : ''}>Linksniai</Link>
        </div>

    </menu>;
}