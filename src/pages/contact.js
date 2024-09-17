import ImageWithText from "@/components/ImageWithText";
import NavMenu from "@/components/NavMenu";

const url = "https://media.istockphoto.com/id/1141778521/vector/mobile-phone-vibrating-or-ringing-flat-vector-icon-for-apps-and-websites.jpg?s=612x612&w=0&k=20&c=DdQVkRexW_o2b86c4yqz24UpNpUA0IIVTS2_tFXECjo=";

export default function Contact ()
{
    return (
        <>
            <NavMenu />
            <ImageWithText imgUrl={url} text={"Kontakt telefoniczny: 000 000 000"}/>
        </>
    )
}