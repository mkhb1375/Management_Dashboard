import React, { useState, useEffect } from "react";

export default function MenuItems({ name, url, isSelected, size }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (size === 1) {

            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 200);

            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [size]);

    return (
        <div>
            <div className={`flex icon-hover cursor-pointer max-w-[8.275rem] mt-[0.2rem] block ${isSelected && size === 0 ? 'icon-selected ' : ''}`}>
                <div className="py-[0.5rem] px-[1.15rem]">
                    <img className="w-[1.025rem]" src={url} alt={name} />
                </div>
                {size === 1 ? (
                    <p
                        className={`font-[600] text-[#030229] ml-[0.5rem] my-[0.5rem] text-[0.6rem] ${isSelected ? "text-[#605BFF]" : ""} ${isVisible ? 'fade-in-out show' : 'fade-in-out'}`}
                    >
                        {name}
                    </p>
                ) : null}
            </div>
        </div>
    );
}
