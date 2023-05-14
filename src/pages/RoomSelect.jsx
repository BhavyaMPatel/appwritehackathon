import React from 'react'
import Room from '../component/Room'
import { useState } from 'react'
export default function RoomSelect() {
 
  
  const [Active,SetActive]=useState('');
  function Play(e){
    // let active=document.getElementById('active')
    console.log(e);
    SetActive(e);
  }
  return (
    <>
    <div className='m-2 p-0 flex flex-row h-screen space-x-1'>
        <div className='border-2 border-solid border-red-500 sm:w-1/6 w-1/3 bg-orange-50 inline-block overflow-auto scroll-m-0'>
            <Room Play={Play}/>
        </div>
        <div className=' border-2 border-solid border-red-500 sm:w-5/6 w-2/3 h-screen inline-block'>
        {Active}
        {/* Takeing Data From Active DataBase */}
        </div>
    </div>
    </>
  )
}
