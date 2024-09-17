import ItemList from "@/components/ItemList";
import TextBlock from "@/components/TextBlock";
import ImageWithText from "@/components/ImageWithText";
import NavMenu from "@/components/NavMenu";

const fruits = ['Apple', 'Banana', 'Lemon', 'Watermelon'];
const imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vrTUU3CKbUDThpm8aZzFXdTmai6PodNfXA&s";

export default function App ()
{
    return (
        <>
            <NavMenu />
            <ItemList items={fruits} />
            <TextBlock title={"Hi!"} content={"Hello world!"} />
            <ImageWithText imgUrl={imgUrl} text={"placeholder image"}/>
        </>
    );
};