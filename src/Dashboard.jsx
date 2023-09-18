import React from 'react'
import Nav from './Nav/Nav'
import DateRangePicker from './DatePicker'
import TopAnalytics from './Top_Analytics/TopAnalytics'

 function Dashboard() {


    return (
        <>  <div className='mt-[1.75rem] ml-[7rem] text-[1.2rem] font-[700]'>Dashboard</div>
            <div className='absolute top-[1.5rem] right-[1.5rem]' > <DateRangePicker  /></div>
            <div className='absolute top-[1.5rem] left-[1.5rem]'><Nav /></div>
            <div className='ml-[7rem] mt-[5rem]'><TopAnalytics/></div>
        </>
    )
}


export default Dashboard