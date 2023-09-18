import { useState } from "react";
import MenuItems from "./MenuItem";

export default function Menu({size}) {
    const [selected, setSelected] = useState(0)
    const items = [
        {
            name: "Dashboard",
            url: "src/assets/nav/Category"
        }
        ,
        {
            name: "Analytics",
            url: "src/assets/nav/Chart"
        }
        ,
        {
            name: "Invoice",
            url: "src/assets/nav/Ticket"
        }
        ,
        {
            name: "Schedule",
            url: "src/assets/nav/Document"
        }
        ,
        {
            name: "Calender",
            url: "src/assets/nav/Calendar"
        }
        ,
        {
            name: "Messages",
            url: "src/assets/nav/Activity"
        }
        ,
        {
            name: "Notification",
            url: "src/assets/nav/Notification"
        }
        ,
        {
            name: "Settings",
            url: "src/assets/nav/Setting"
        }
        ,

    ]

    return (
        <div className="" >
            <div className="mt-[1.6rem]">
                {items.map((item, idx) => {
                    const isSelected = selected === idx ? true : false;
                    return <span onClick={() => { setSelected(idx) }} key={idx}>

                        <MenuItems size={size} isSelected={isSelected} name={item.name} url={item.url + (isSelected ? '-blue.png' : '.png')} />
                    </span>
                })}
            </div>
        </div>
    )
}


