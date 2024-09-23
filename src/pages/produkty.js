import NavMenu from "@/components/NavMenu";
import ListWithObjects from "@/components/ListWithObjects";

const products = [];

for (let i=0; i < 8; ++i)
{
    products.push({name: `Product ${i+1}`, value: `Value ${i+1}`})
}

export default function Produkty ()
{
    return (
        <>
            <NavMenu />
            <ListWithObjects items={products}/>
        </>
    );
}