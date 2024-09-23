import styles from '@/styles/style.module.css';
import Link from "next/link";

export default function NavMenu ()
{
    return (
        <div 
            className={`${styles.border} ${styles.navMenu}`}
            style={{ display: "flex", gap: "25px" }}
        >
            <Link href={"/"}> Home </Link>
            <Link href={"/about"}> About </Link>
            <Link href={"/contact"}> Contact </Link>
            <Link href={"/footer"}> Footer </Link>
            <Link href={"/page"}> Page </Link>
            <Link href={"/produkty"}> Produkty </Link>
        </div>
    )
}