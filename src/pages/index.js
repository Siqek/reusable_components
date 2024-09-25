import { useState, useEffect } from "react";

import ItemList from "@/components/ItemList";
import TextBlock from "@/components/TextBlock";
import ImageWithText from "@/components/ImageWithText";
import SimpleForm from "@/components/SimpleForm";
import ConditionalDisplay from "@/components/ConditionalDisplay";
import ListWithObjects from "@/components/ListWithObjects";
import DynamicButton from "@/components/DynamicButton";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import NavMenu from "@/components/NavMenu";

const fruits = ['Apple', 'Banana', 'Lemon', 'Watermelon'];
const imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vrTUU3CKbUDThpm8aZzFXdTmai6PodNfXA&s";
const items = [{name: 'dzień tygodnia', value: 'poniedziałek'}, {name: 'morze', value: 'Bałtyk'}, {name: 'item', value: 'abc'}];
const on_click = function () { console.log('Kliknięto na stronie głównej'); };

export default function App ()
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
            <ItemList items={fruits} />
            <TextBlock title={"Hi!"} content={"Hello world!"} />
            <ImageWithText imgUrl={imgUrl} text={"placeholder image"}/>
            <SimpleForm label={"x"} placeholder={"Wprowadź x"}/>
            <SimpleForm label={"y"} placeholder={"Wprowadź y"}/>
            <SimpleForm label={"z"} placeholder={"Wprowadź z"}/>
            <ConditionalDisplay isVisible={true}/>
            <ListWithObjects items={items}/>
            <DynamicButton label={"Strona głowna"} onClick={on_click} />
        </>
    );
};