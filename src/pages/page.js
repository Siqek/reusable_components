import SimpleForm from "@/components/SimpleForm";
import ConditionalDisplay from "@/components/ConditionalDisplay";
import NavMenu from "@/components/NavMenu";

export default function Page ()
{
    return (
        <>
            <NavMenu />
            <SimpleForm label={"text"} placeholder={"wprowadź text"} />
            <ConditionalDisplay isVisible={true}/>
            <ConditionalDisplay isVisible={false} />
        </>
    );
}