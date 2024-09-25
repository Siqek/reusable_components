import { useState, useEffect } from 'react';

import styles from '@/styles/style.module.css';

export default function ThemeSwitcher ()
{
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        if (localStorage.getItem("activeTheme"))
            setTheme(localStorage.getItem("activeTheme"));
    }, []);

    useEffect(() => {
        if (theme === localStorage.getItem("activeTheme"))
        {
            document.body.classList.add(theme === "light" ? "light-theme" : "dark-theme");
            document.body.classList.remove(theme === "light" ? "dark-theme" : "light-theme");
        };
    }, [theme]);

    const toggleTheme = () =>
    {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("activeTheme", newTheme);
    };

    return (
        <div className={styles.border}>
            <button onClick={toggleTheme}>
                Zmień motyw na { theme === "dark" ? "jasny" : "ciemny" }
            </button>
            <p style={{ opacity: "0.7" }}>Wariant komponentu z zadania (bez funkcji zewnętrzej)</p>
        </div>
    );
}