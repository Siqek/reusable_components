import TextBlock from "@/components/TextBlock";
import NavMenu from "@/components/NavMenu";

export default function Footer ()
{
    return (
        <>
            <NavMenu />
            <TextBlock title={"Footer"} content={"Krótki opis strony"} />
        </>
    )
}