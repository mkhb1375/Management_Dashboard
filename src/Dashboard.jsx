import React from 'react'
import Nav from './Nav/Nav'
import DateRangePicker from './DatePicker'
import TopAnalytics from './Top_Analytics/TopAnalytics'
import Graph from './Graph'

 function Dashboard() {

     const graphData = [
         { time: '10am', sales: 100 },
         { time: '11am', sales: 200 },
         { time: '12pm', sales: 150 },
         { time: '1pm', sales: 300 },
         { time: '2pm', sales: 250 },
         { time: '3pm', sales: 400 },
         { time: '4pm', sales: 350 },
         { time: '5pm', sales: 450 },
         { time: '6pm', sales: 300 },
         { time: '7pm', sales: 350 },
     ];


    return (
        <>  
            <div className='absolute top-[1.5rem] right-[1.5rem]' > <DateRangePicker  /></div>
            <div className='absolute top-[1.5rem] left-[1.5rem]'><Nav /></div>
            <div className='mx-auto xl:w-[80vw] '>
            <div className='mt-[6rem] lg:mt-[1.75rem] ml-[7rem] text-[1.2rem] font-[700]'>Dashboard</div>
            <div className='ml-[7rem] mt-[5rem]'><TopAnalytics/></div>
            <div className=' lg:ml-[20rem] scale-[0.5] lg:scale-[1]'> <Graph data={graphData} /></div>
            </div>
        </>
    )
}


export default Dashboard