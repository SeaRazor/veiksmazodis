import styles from "@/app/page.module.css";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Hamburger() {
    const pathname = usePathname();
    return (

        <ul className={styles.hamburger}>
            <li className={styles.menu_item}>
                <Link href="/verbs" className={pathname == '/verbs' ? 'active' : ''}>Veiksmažodžiai</Link>
            </li>
            <li className={styles.menu_item}>
                <Link href="/cases" className={pathname == '/cases' ? 'active' : ''}>Linksniai</Link>
            </li>

        </ul>

    );
}