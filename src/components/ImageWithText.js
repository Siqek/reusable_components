import styles from '@/styles/style.module.css';

export default function ImageWithText ({ imgUrl, text })
{
    return (
        <div className={styles.border} >
            <img src={imgUrl} alt={text} style={{ height: "200px" }} />
            <p> {text} </p>
        </div>
    )
}