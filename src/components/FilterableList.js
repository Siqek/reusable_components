import { useState } from 'react';

import styles from '@/styles/style.module.css';

export default function FilterableList ({ items })
{
    const [ filterText, setFilterText ] = useState("");

    const filtredList = items.filter(item => item.toLowerCase().includes(filterText));

    return (
        <div className={styles.border}>
            <input type='text' placeholder='Filtruj...' onChange={e => setFilterText(e.target.value.toLowerCase())} />
            <ul>
                {filtredList.map((item, index) => (
                    <li key={index}> {item} </li>
                ))}
            </ul>
        </div>
    );
}