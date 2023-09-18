import React from "react";

export default function TopAnalyticsCard({url,number,detail}) {

    return (
        <div className="flex mr-[1.5rem] bg-[white] p-2 lg:p-[1.5rem] cursor-[pointer]">
            <img className="w-[2rem] h-[2rem] lg:h-[auto] lg:w-[3rem] mr-[0.75rem]" src={url} alt={detail} />
            <div>
            <p className="text:-[0.9rem] lg:text-[1.1rem] font-[800]">{number+'+'}</p>
            <p className="text-[0.7rem] font-[400] lg:mr-[2.25rem]">{detail}</p>
            </div>
        </div>
    )
}