import ItemList from "@/components/ItemList";
import NavMenu from "@/components/NavMenu";

const array = "to jest lista z kilkoma elementami".split(' ');

export default function About ()
{
    return (
        <>
            <NavMenu />
            <ItemList items={ array } />
        </>
    )
}