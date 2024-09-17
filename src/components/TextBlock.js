import styles from './../styles/style.module.css';

export default function TextBlock ({ title, content })
{
    return (
        <div className={styles.border} >
            <h2> {title} </h2>
            <p> {content} </p>
        </div>
    );
};