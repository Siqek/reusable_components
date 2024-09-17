import styles from './../styles/style.module.css';

export default function ItemList ({ items })
{
    return (
        <div className={styles.border} >
            <ul>
                {items.map( (item, index) => (
                    <li key={index}> {item} </li>)
                )}
            </ul>
        </div>
    );
};