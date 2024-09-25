import { useState, useEffect } from 'react';

import styles from '@/styles/style.module.css';

export default function BodyThemeSwitcher ({ onThemeChange })
{
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        if (localStorage.getItem("activeTheme"))
            setTheme(localStorage.getItem("activeTheme"));
    }, [])

    const toggleTheme = () =>
    {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        onThemeChange(newTheme);
        localStorage.setItem("activeTheme", newTheme);
    };

    return (
        <div className={styles.border}>
            <button onClick={toggleTheme}>
                Zmień motyw na { theme === "dark" ? "jasny" : "ciemny" }
            </button>
        </div>
    );
}