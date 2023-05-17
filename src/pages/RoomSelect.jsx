  import React from 'react'
  import Room from '../component/Room'
  import { useState } from 'react'
  import {account,databases,Query} from '../../services/appwriteConfig'

  export default function RoomSelect() {
  

    function Data(){
      console.log(databases.listDocuments);
      let promise = databases.listDocuments("6462f35ceb505509c4ff","6462f3deb9ff444beaaf");
      // console.log(promise);
      promise.then(function (response){
        // console.log(response.documents);
        response.documents.forEach(function (doc){
          console.log(doc.chat);
        });
      }, function (error) {
        console.log(error);
      });
    }

    
    const [Active,SetActive]=useState('');
    function Play(e){
      // let active=document.getElementById('active')
      console.log(e);
      SetActive(e);
    }

    function Name(){
      console.log("HI NAME KO CALL KIYA KYA");
      let data=document.getElementById('default-search')
      console.log(data.value);
      if(data.value==="")
        alert("Please Enter Name");
      data.value=''
    }

    return (
      <>
      <div className='m-2 p-0 flex flex-row h-screen space-x-1'>
          <div className='border-2 border-solid border-red-500 sm:w-1/6 w-1/3] inline-block overflow-auto scroll-m-0'>  
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative m-2">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500" placeholder="Search" required/>
                <button onClick={Name} className="text-white absolute right-2.5 bottom-2.5 bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Search</button>
            </div>
              <button onClick={(e)=>{console.log("HI")}} className='bg-[#f02e65] p-5 m-2 text-white rounded-full font-Montserrat text-base'>Join Room</button>
          </div>
          <div className=' border-2 border-solid border-red-500 sm:w-5/6 w-2/3 h-screen inline-block'>
          {Active}
          {Active=="Vartalap1" ? Data():<p>HI</p>}

          {/* Takeing Data From Active DataBase */}
          </div>
      </div>
      </>
    )
  }
