import React, { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Logout from "./Logout";

export default function Nav() {
    const [size, setSize] = useState(0);

    const handleMouseEnter = () => {
        setSize(1);
    };

    const handleMouseLeave = () => {
        setSize(0);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`min-h-[44rem]  ${size === 0 ? "w-[3.8rem]" : "w-[9rem]"}  transition-width duration-[1s] block bg-[white] rounded-[0.5rem]  `}
        >
            <Logo />
            <Menu size={size} />
            
            {size === 1 ? <img
                className="cursor-pointer w-[7rem] mt-[7.2rem] mx-auto "
                src="src/assets/nav/Illustration.png"
                alt="Illustration"
            /> :null }  
           
            <Logout url={'src/assets/nav/Photo.jpg'} name="Easin Arafat" isFree={true} size={size} />
        </div>
    );
}
