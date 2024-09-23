import styles from '@/styles/style.module.css';

export default function ListWithObjects ({ items })
{
    return (
        <div className={styles.border}>
            <ul>
                {
                    items.map((item, index) => (
                        <li key={index}>{item.name}: {item.value}</li>
                    ))
                }
            </ul>
        </div>

    )
}