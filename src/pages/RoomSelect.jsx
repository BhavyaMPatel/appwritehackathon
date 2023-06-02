import React from 'react'
import { useState} from 'react'
import { useEffect } from 'react'
import {account,databases,Query,ID,client} from '../../services/appwriteConfig'

//Component
import Alert from '../component/Alert'
import SelectRoomButton from '../component/SelectRoomButton'


//Functions
import {alert,JoinRoom,Chat,Disconnect} from '../functions/function'


export default function RoomSelect() {

  const [RoomStatus,SetRoomStatus]=useState("Join Room");
  const [Room,SetRoom]=useState("Select Room");
  const [Join,SetJoin]=useState(false);
  const [RoomId,SetRoomId]=useState('a');

  useEffect(()=>{
    async function message(){
      let message2=await databases.listDocuments("6462f35ceb505509c4ff","6462f3deb9ff444beaaf")
      console.log(message2)
    }
    message()
  },[]);

  useEffect(()=>{
    console.log(RoomId)
    client.subscribe([`databases.6462f35ceb505509c4ff.collections.${RoomId}.documents`],response=>{
      console.log(response.payload)
      let data=document.getElementById("chat");
      let msg=document.getElementById("chatmsg");
      data.innerHTML+= `<div>${response.payload}</div>`
    })
  },[RoomId])
  //Subscribe DataBase 

  return (
    <>
    <Alert fun={alert}/>
    <div className='m-2 p-0 flex sm:flex-row flex-col h-screen sm:space-x-1'>
        <div className='border-2 border-solid border-red-500 sm:w-2/6 sm:m-0 m-2 sm:inline-block '>  
            <SelectRoomButton JoinRoom={JoinRoom} Status={RoomStatus} />
           { Join && <button onClick={Disconnect} className='bg-[#f02e65] p-5 m-2 text-white rounded-full font-Montserrat text-base'>Disconnect</button> }

        </div>
        <div className='relative border-2 border-solid border-red-500 sm:w-4/6 sm:m-0 m-2 inline-block overflow-auto'>
          <div id="chat">
            <div>{Room}</div>
          </div>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="bottom-0 w-4/5 sm:w-3/5 mb-2 fixed">
                  <div className="absolute bottom-0 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="search" id="chatmsg" className="w-full block p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500" placeholder="Send Message" required/>
                  <button onClick={Chat}  className="text-white absolute right-2.5 bottom-2.5 bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Send</button>
          </div>
          {/* Takeing Data From Active DataBase */}
        </div>
    </div>
    </>
  )
}


// Enter Room Name                   --Done
// Find Room Is Available Or Not ?   --Done
// If Room Is Available Then Connect --Done


//Next Todo
//Manage RealTime DataBase One Upproach -- Add Data In Queue And Render RealTime
//Delete Message Available In Queue While Leaving Room --