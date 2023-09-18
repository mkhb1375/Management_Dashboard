import React, { useState } from "react";

export default function Logout({ url, name, isFree, size }) {

   

    return (
        <div className={`${size === 1 ? 'mt-[1.5rem]' : 'mt-[15rem]'} flex flex-wrap items-center`}>
            <img className="cursor-pointer ml-[0.8rem] w-[1.845rem] rounded-[0.5rem]" src={url} alt={`${name}'s photo`} />
            {size === 1 ? (
                <div className="ml-[0.4rem]">
                    <p className="font-[600] text-[0.5rem]">{name}</p>
                    <p className="font-[400] text-[0.4rem]">{isFree ? 'Free Account' : 'Premium Account'}</p>
                </div>
            ) : null}
             
                <img
                    className={`cursor-pointer opacity-[40%] hover:opacity-[100%] w-[0.7rem] h-[0.7rem] ${size === 0 ? 'mt-[0.55rem] ml-[1.4rem]' : 'ml-[1.1rem]'}`}
                    src="src/assets/nav/Logout.png"
                    alt="Logout"
                />
            
        </div>
    );
}
