"use client";
import {useTheme} from "next-themes";
import React from "react";
import styles from "@/app/UI/ui.module.css";
import Toggle from "@/app/UI/Toggle";
import {IconMoonFilled, IconSunFilled} from "@tabler/icons-react";

const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme();

    function toggleTheme(newTheme) {
        setTheme(newTheme);
    }

    return (
        /* <div className={`${styles.switch_field} ${styles.theme_toggle}`}>
             <input type="radio" id="light" name="theme" value="light" onChange={() => setTheme("light")}
                    checked={theme === 'light'}/>
             <label htmlFor="light" className={styles.theme_label}><IconSunFilled size={20} color="#fdc500"/></label>
             <input type="radio" id="dark" name="theme" value="dark" onChange={() => setTheme("dark")}
                    checked={theme === 'dark'}/>
             <label htmlFor="dark" className={styles.theme_label}><IconMoonFilled size={20} color="lightblue"/> </label>
         </div>*/
        <div className={styles.image_toggle}>
            <Toggle id={theme} name1={<IconSunFilled size={20} color="#fdc500"/>} value1="light"
                    name2={<IconMoonFilled size={20} color="lightblue"/>} value2="dark" currentValue={theme}
                    onChangeHandler={toggleTheme}/>
        </div>
    );
};
export default ThemeSwitcher;