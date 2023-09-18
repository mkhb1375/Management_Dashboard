import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ArrowIcon from "./assets/Arrow";

const DateRangePicker = () => {
    const defaultStartDate = new Date("2021-06-10");
    const defaultEndDate = new Date("2021-10-10");

    const [startDate, setStartDate] = useState(defaultStartDate);
    const [endDate, setEndDate] = useState(defaultEndDate);

    const startDatePickerRef = useRef(null);
    const endDatePickerRef = useRef(null);

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const triggerDatePickerClick = (datePickerRef) => {
        if (datePickerRef.current) {
            datePickerRef.current.setOpen(true);
        }
    };

    return (
        <div>
            <div className="date-picker flex">
                <div className="date-input ">
                    <DatePicker className="date-range" 
                        selected={startDate}
                        onChange={handleStartDateChange}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="Start Date"
                        ref={startDatePickerRef}
                    />
                    
                    <button className="bg-[white]" onClick={() => triggerDatePickerClick(startDatePickerRef)}>
                        <ArrowIcon  />
                    </button>
                </div>
                <div className="date-input ">
                    <DatePicker className="date-range"
                        selected={endDate}
                        onChange={handleEndDateChange}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        placeholderText="End Date"
                        ref={endDatePickerRef}
                    />
                    <button className="bg-[white]" onClick={() => triggerDatePickerClick(endDatePickerRef)}>
                        <ArrowIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DateRangePicker;
