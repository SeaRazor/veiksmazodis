import Navigation from "@/app/UI/Navigation";
import styles from "@/app/page.module.css";

export default function DesktopNavigation() {
    return (
        <>
            <nav className={styles.menu}>
                <img src="/lithuania_64.png"/>
                <Navigation/>
            </nav>

        </>
    );
}