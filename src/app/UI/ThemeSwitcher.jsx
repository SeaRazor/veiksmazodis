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

           <div className={styles.theme_switch_wrapper}>
               <Toggle id={theme} name1={<IconSunFilled size={20} color="#fdc500"/>} value1="light"
                       name2={<IconMoonFilled size={20} color="lightblue"/>} value2="dark" currentValue={theme}
                       onChangeHandler={toggleTheme} useImages={true}/>
           </div>


    );
};
export default ThemeSwitcher;
