import ItemList from "@/components/ItemList";
import TextBlock from "@/components/TextBlock";
import ImageWithText from "@/components/ImageWithText";
import SimpleForm from "@/components/SimpleForm";
import ConditionalDisplay from "@/components/ConditionalDisplay";
import ListWithObjects from "@/components/ListWithObjects";
import NavMenu from "@/components/NavMenu";

const fruits = ['Apple', 'Banana', 'Lemon', 'Watermelon'];
const imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vrTUU3CKbUDThpm8aZzFXdTmai6PodNfXA&s";
const items = [{name: 'dzień tygodnia', value: 'poniedziałek'}, {name: 'morze', value: 'Bałtyk'}, {name: 'item', value: 'abc'}];

export default function App ()
{
    return (
        <>
            <NavMenu />
            <ItemList items={fruits} />
            <TextBlock title={"Hi!"} content={"Hello world!"} />
            <ImageWithText imgUrl={imgUrl} text={"placeholder image"}/>
            <SimpleForm label={"x"} placeholder={"Wprowadź x"}/>
            <SimpleForm label={"y"} placeholder={"Wprowadź y"}/>
            <SimpleForm label={"z"} placeholder={"Wprowadź z"}/>
            <ConditionalDisplay isVisible={true}/>
            <ListWithObjects items={items}/>
        </>
    );
};