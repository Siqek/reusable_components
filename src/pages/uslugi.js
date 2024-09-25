import FilterableList from "@/components/FilterableList";
import NavMenu from "@/components/NavMenu";

const array = ["Charger", "Table", "Surprise"];

export default function Uslugi ()
{
    return (
        <>
            <NavMenu />
            <FilterableList items={array}/>
        </>
    );
}