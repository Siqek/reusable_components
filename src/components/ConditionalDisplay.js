import styles from '@/styles/style.module.css';

export default function ConditionalDisplay ({ isVisible })
{
    return (
        <div className={styles.border} >
            {
                (isVisible ?
                    (
                        <p>ten tekst powinien być widoczny</p>
                    ) 
                    : (
                        <p>Brak danych do wyświetlenia!</p>
                    ))
            }
        </div>
    );
}