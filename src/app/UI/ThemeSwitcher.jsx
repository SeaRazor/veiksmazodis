"use client";
import React, {useState} from "react";
import styles from "@/app/UI/ui.module.css";
import {IconMoonFilled, IconSunFilled} from "@tabler/icons-react";

const ThemeSwitcher = () => {
    const [theme, setActiveTheme] = useState('light');

    /*
           function toggleTheme(newTheme) {
               setTheme(newTheme);
           }*/


    function handleThemeChange(e) {
        setActiveTheme(e.target.value);
    }

    return (

        <div className={styles.theme_switch_wrapper}>
            {/*    <Toggle id={theme} name1={<IconSunFilled size={20} color="#fdc500"/>} value1="light"
                       name2={<IconMoonFilled size={20} color="lightblue"/>} value2="dark" currentValue={theme}
                       onChangeHandler={toggleTheme} useImages={true}/>*/}
            <form className={`${styles.switch_field} ${styles.image_toggle}`} onChange={handleThemeChange}>
                <input type="radio" id="light_theme" name="theme" value="light" checked={theme === 'light'}
                />
                <label htmlFor="light_theme">{<IconSunFilled size={20} color="#fdc500"/>}</label>
                <input type="radio" id="dark_theme" name="theme" value="dark" checked={theme === 'dark'}
                />
                <label htmlFor="dark_theme">{<IconMoonFilled size={20} color="lightblue"/>}</label>
            </form>

        </div>


    );
};
export default ThemeSwitcher;
