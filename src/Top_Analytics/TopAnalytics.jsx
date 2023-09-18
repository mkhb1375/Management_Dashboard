import React from "react";
import TopAnalyticsCard from "./TopAnalyticsCard";

export default function TopAnalytics(){
    const cards = [
        {
            url:"src/assets/top-analytics/Icon.png",
            number:"178",
            detail:"Save Producs"
        },
        {
            url: "src/assets/top-analytics/Icon (1).png",
            number: "20",
            detail: "Stock Producs"
        },
        {
            url: "src/assets/top-analytics/Incon.png",
            number: "190",
            detail: "Sales Producs"
        },
        {
            url: "src/assets/top-analytics/Icon (2).png",
            number: "12",
            detail: "Job Application"
        },
    ]
    return(
        <div className="flex">
            {cards.map((card , index)=>{
                return <span key={index}>
                <TopAnalyticsCard url={card.url} number={card.number} detail={card.detail}/>
                </span>
            })}
        </div>
    )
}