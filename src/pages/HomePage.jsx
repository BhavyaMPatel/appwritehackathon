import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {client} from '../../services/appwriteConfig'
import { nodedatabase } from '../../services/appwritesdkConfig'

import Navbar from '../component/Navbar'


export default function HomePage() {

useEffect(()=>{
    client.subscribe(['databases.6462f35ceb505509c4ff.collections'],response=>{
        console.log(response.payload)
    });
})

const [Available,SetAvailable]=useState(false);
const [Status,SetStatus]=useState('');

async function CheckRoom(){
    let collection_name = document.getElementById('collection_name').value;
    if(collection_name===""){
        
    }else{
        let x= (await nodedatabase.listCollections('6462f35ceb505509c4ff')).collections
        x.forEach(element => {
            if(element.name==collection_name){
                SetAvailable(true);
                console.log('HI')
                
            }   
        });
    }
}


return (

<>
<Navbar/>
    <div className=' f flex flex-wrap sm:mx-20 mt-20 h-fit items-center'>
        <div className='w-full sm:w-1/2 sm:p-2 p-5 h-[45vh] flex justify-center items-center'>
            <div className='text-[#373b4e] fill-[#606a7b] text-4xl md:text-4xl lg:text-5xl font-Poppins font-semibold'>
                <div className='flex justify-start'> Wel-Come To </div>
                    <div className='text-[#db1a5a] flex justify-statr'> VartaLap </div>
                        <div className="text-[#373b4e] mt-2 flex justify-start text-base md:text-lg lg:text-xl font-Inter tracking-tighter">
                            VartaLap - The One And Only Place For Connect Hidden To World And Do VartaLap WithOut Taking Care About Your Privacy Its Our Duty
                        </div>
                        <dialog id='room' className='w-screen opacity-100 fixed top-1 rounded-md'>
                        <div className='mb-2 font-Poppins text-lg md:text-2xl text-pink-600'>Enter Your Unique Room Name</div>
                        <div >
                            <input type="text" id="collection_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg md:text-2xl rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500" placeholder="It's Secret Room...." required />
                        </div>
                        <button onClick={CheckRoom} className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-400 hover:bg-gray-100 hover:text-pink-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-pink-700 dark:focus:text-white dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-slate-900 "><svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path></svg>Check Room Name Availability</button>
                    </dialog>
                <button onClick={()=>{room.showModal()}} className=" inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-400 hover:bg-gray-100 hover:text-pink-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-pink-700 dark:focus:text-white dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-slate-900 "><svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path></svg>Make Your Room Now</button>
            </div>
        </div>
        <div className='w-full sm:w-1/2 sm:p-2 p-5 text-center flex justify-center items-center h-[67vh]'>
            <img className='h-[55vh] sm:h-[50vh] md:h-[70vh]' src='/image.jpg' alt='Navbackground'/>
        </div>
    </div>

    <div className='flex flex-wrap-reverse sm:mx-20 m-2 h-fit items-center sm:mt-5 md:mt-7'>
        <div className='w-full sm:w-1/2 sm:p-2 p-5 text-center flex justify-center items-center h-[67vh]'>
                <img className='h-4/5' src='/image_two.jpg' alt='Navbackground'/>
        </div>
        <div className='w-full sm:w-1/2 sm:p-2 p-5 mt-5 h-[50vh] sm:h-[45vh] flex justify-center items-center'>
            <div className='text-[#183b56] text-3xl md:text-4xl lg:text-4xl font-Poppins text font-semibold'>
                <div className='flex justify-start'> Rules To Connect </div>
                <div className="text-[#373b4e] mt-2 mb-2 flex justify-start text-base md:text-base lg:text-lg font-Poppins tracking-tighter">
                You Can Connect With Your Friend's Through Secret Room That Can Be Connect Only From RoomName And It's Secret To You !</div>
                <a href="/Vroom" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-400 hover:bg-gray-100 hover:text-pink-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-pink-700 dark:focus:text-white dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-slate-900 "><svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path></svg>Join Room Now</a>
            </div>
        </div>
    </div>

    <div className='flex justify-center text-[#183b56] text-base md:text-2xl lg:text-3xl font-Poppins text font-semibold mt-10 sm:mt-7 md:mt-9 mb-5'>
        VartaLap Cares Abouts Your Privacy !
    </div>
</>
)
}
