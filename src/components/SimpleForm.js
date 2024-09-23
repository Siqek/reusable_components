import { useState } from "react";

import styles from "@/styles/style.module.css"

export default function SimpleForm ({ label, placeholder })
{
    const [ inputValue, setInputValue ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${label}: ${inputValue}`);
    }

    return (
        <div className={styles.border}>
            <form onSubmit={handleSubmit}>
                <label> {label} </label>
                <input placeholder={placeholder} type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} ></input>
                <button type="submit">Wyślij</button>
            </form>
        </div>
    );
}