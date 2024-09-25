import styles from '@/styles/style.module.css';

export default function DynamicButton ({ label, onClick })
{
    return (
        <div className={styles.border}>
            <button onClick={onClick}> {label} </button>
        </div>
    )
}