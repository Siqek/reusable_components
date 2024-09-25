import ListWithObjects from "@/components/ListWithObjects";
import FilterableList from "@/components/FilterableList";
import NavMenu from "@/components/NavMenu";

const products = [];

for (let i=0; i < 8; ++i)
{
    products.push({name: `Product ${i+1}`, value: `Value ${i+1}`})
}

const filterableArray = [ "Apple", "Banana", "Mango", "Orange", "Pineapple", "Kiwi", "Strawberry", "Blueberry", "Grapefruit", "Pomegranate", "Watermelon", "Peach"];

export default function Produkty ()
{
    return (
        <>
            <NavMenu />
            <ListWithObjects items={products}/>
            <FilterableList items={filterableArray}/>
        </>
    );
}