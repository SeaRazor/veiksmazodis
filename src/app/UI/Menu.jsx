import styles from "@/app/page.module.css";
import Link from "next/link";
import {usePathname} from "next/navigation";

export function Menu({className}) {
    const pathname = usePathname();
    return (
        <ul className={className}>

            <li className={styles.menu_item}>
                <Link href="/verbs" className={pathname == '/verbs' ? 'active' : ''}>Глаголы</Link>
            </li>
            <li className={styles.menu_item}>
                <Link href="/cases" className={pathname == '/cases' ? 'active' : ''}>Падежи</Link>
            </li>
            <li className={styles.menu_item}>
                <Link href="/words" className={pathname == '/words' ? 'active' : ''}>Словарь A2</Link>
            </li>


        </ul>
    );
}