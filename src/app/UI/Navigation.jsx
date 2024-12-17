'use client';
import styles from "@/app/page.module.css";
import {usePathname} from "next/navigation";
import {useState} from "react";
import {Menu} from "@/app/UI/Menu";
import ThemeSwitcher from "@/app/UI/ThemeSwitcher";

export default function Navigation() {
    const pathname = usePathname();

    const [hamburgerIsOpen, setHamburgerOpenState] = useState(false);
    const logoStyle = hamburgerIsOpen ? 'pointer' : ''

    function toggleHamburgerOpen() {
        setHamburgerOpenState(prevState => !prevState);
    }


    return (<header>
        <nav className={styles.nav}>
            <div className={styles.logo} onClick={toggleHamburgerOpen}>
                <img src="/lithuania_64.png" className={styles.logo_img} alt="logo img"/>
                {hamburgerIsOpen && <Menu className={styles.hamburger}/>}


            </div>

            <Menu className={styles.navbar}/>
            <ThemeSwitcher/>


        </nav>
    </header>);


}