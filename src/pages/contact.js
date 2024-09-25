import { useState, useEffect } from "react";

import ImageWithText from "@/components/ImageWithText";
import SimpleForm from "@/components/SimpleForm";
import DynamicButton from "@/components/DynamicButton";
import BodyThemeSwitcher from "@/components/BodyThemeSwitcher";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import NavMenu from "@/components/NavMenu";

const url = "https://media.istockphoto.com/id/1141778521/vector/mobile-phone-vibrating-or-ringing-flat-vector-icon-for-apps-and-websites.jpg?s=612x612&w=0&k=20&c=DdQVkRexW_o2b86c4yqz24UpNpUA0IIVTS2_tFXECjo=";
const on_click = function () { console.log('Kliknięto na stronie kontaktowej'); };

export default function Contact ()
{
    const [theme, setTheme] = useState(null);

    const on_theme_change = (theme) => { setTheme(theme); };

    useEffect(() => {
        if (theme)
        {
            document.body.classList.add(theme === "light" ? "light-theme" : "dark-theme");
            document.body.classList.remove(theme === "light" ? "dark-theme" : "light-theme");
        };
    }, [theme]);

    return (
        <>
            <NavMenu />
            <ThemeSwitcher onThemeChange={on_theme_change} />
            <BodyThemeSwitcher />
            <SimpleForm label={"email"} placeholder={"Wprowadź email"} />
            <SimpleForm label={"numer telefonu"} placeholder={"Wprowadź numer telefonu"} />
            <ImageWithText imgUrl={url} text={"Kontakt telefoniczny: 000 000 000"}/>
            <DynamicButton label={"strona kontaktowa"} onClick={on_click}/>
        </>
    );
}