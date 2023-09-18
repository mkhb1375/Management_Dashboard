import React from "react";

export default function Logo() {
    return (
        <div className="flex items-center pt-[1.6rem] mx-auto max-w-[5rem] flex-wrap">
            <img className="cursor-pointer w-[1.9rem] mx-auto" src="src/assets/nav/Subtract.svg" alt="Main Logo" />
            <p className="text-[1rem] mt-[0.2rem] text-center mx-auto font-[600]">Base</p>
        </div>
    );
}
