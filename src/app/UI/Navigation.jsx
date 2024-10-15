'use client';
import styles from "@/app/page.module.css";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Hamburger from "@/app/UI/Hamburger";
import {useState} from "react";

export default function Navigation() {
    const pathname = usePathname();

    const [hamburgerIsOpen, setHamburgerOpenState] = useState();
    const logoStyle = hamburgerIsOpen ? 'pointer' : ''

    function toggleHamburgerOpen() {
        setHamburgerOpenState(prevState => !prevState);
    }

    const imgStyle = hamburgerIsOpen ? "{cursor:pointer;}" : "";

    return (<header>
        <nav className={styles.nav}>
            <div className={styles.logo} onClick={toggleHamburgerOpen}>
                <img src="/lithuania_64.png" className={styles.logo_img}/>
                {hamburgerIsOpen && <Hamburger/>}


            </div>


            <ul className={styles.navbar}>

                <li className={styles.menu_item}>
                    <Link href="/verbs" className={pathname == '/verbs' ? 'active' : ''}>Veiksmažodžiai</Link>
                </li>
                <li className={styles.menu_item}>
                    <Link href="/cases" className={pathname == '/cases' ? 'active' : ''}>Linksniai</Link>
                </li>
            </ul>
        </nav>
    </header>);


}