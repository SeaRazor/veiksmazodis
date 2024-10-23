import {usePathname} from "next/navigation";
import {Menu} from "@/app/UI/Menu";

export default function Hamburger() {
    const pathname = usePathname();
    return (
        <Menu className="hamburger"/>
        /*  <ul className={styles.hamburger}>
              <li className={styles.menu_item}>
                  <Link href="/verbs" className={pathname == '/verbs' ? 'active' : ''}>Veiksmažodžiai</Link>
              </li>
              <li className={styles.menu_item}>
                  <Link href="/cases" className={pathname == '/cases' ? 'active' : ''}>Linksniai</Link>
              </li>

          </ul>*/

    );
}