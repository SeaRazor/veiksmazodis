import styles from "@/app/page.module.css";
import Link from "next/link";
import {usePathname} from "next/navigation";

export function Menu({className}) {
    const pathname = usePathname();
    return (
        <ul className={className}>

            <li className={styles.menu_item}>
                <Link href="/verbs" className={pathname == '/verbs' ? 'active' : ''}>Veiksmažodžiai</Link>
            </li>
            <li className={styles.menu_item}>
                <Link href="/cases" className={pathname == '/cases' ? 'active' : ''}>Linksniai</Link>
            </li>
            <li className={styles.menu_item}>
                <Link href="/words" className={pathname == '/words' ? 'active' : ''}>A2 žodynas</Link>
            </li>


        </ul>
    );
}