"use client";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import Toggle from "@/app/UI/Toggle";

const ThemeSwitcher = () => {
    const [mount, setMount] = useState(false);
    const {systemTheme, theme, setTheme} = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    function handleThemeChange(newTheme) {
        setTheme(currentTheme === "dark" ? "light" : "dark");
    }

    useEffect(() => {
        setMount(true);
    }, []);
    return mount ? (
        <Toggle name1="light" value1="Светлая" name2="dark" value2="Темная" currentValue="light"
                onChangeHandler={handleThemeChange}/>
    ) : null;
};
export default ThemeSwitcher;