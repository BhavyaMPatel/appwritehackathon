import React from 'react'
import { useState} from 'react'
import {account,databases,Query,ID,client} from '../../services/appwriteConfig'
import {nodeclient,nodedatabase} from '../../services/appwritesdkConfig'

import Room from '../component/Room'
import Alert from '../component/Alert'
import SelectRoomButton from '../component/SelectRoomButton'
import { Client } from 'appwrite'
import { useEffect } from 'react'

export default function RoomSelect() {

  const [messagess,setmessagess]= useState('');

  useEffect(()=>{
    async function message(){
      let message2=await databases.listDocuments("6462f35ceb505509c4ff","6462f3deb9ff444beaaf")
      console.log(message2)
    }
    message()
  },[]);

  useEffect(()=>{
    client.subscribe(['databases.6462f35ceb505509c4ff.collections.6462f3deb9ff444beaaf.documents'],response=>{
      console.log(response.payload)
    })
  })
  //Subscribe DataBase 
  
  


  function Data(){
    console.log(databases.listCollections());
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

  async function collection(){
  let x=await nodedatabase.listCollections('6462f35ceb505509c4ff')
  console.log(x);
  //   try{
  //     const res =await fetch('/v1/databases/6462f35ceb505509c4ff/collections',{  
  //           headers:{
  //           'Content-type': 'application/json',
  //           'Host': 'localhost',
  //           'X-Appwrite-Response-Format': '1.0.0',
  //           'X-Appwrite-Project': '645f6479dc1a58ddb3b5',
  //           'X-Appwrite-Key': 'e48d49263f9ed9fd468b4c20af7b3271e416321081c117c75ecdada8994a9aad8dc48be3d524a099bbe6594eadf12d01b040230883b5e4c8445f9cdb06907755a75774561a2d34bb22e1baecaa7f311f498ae080fdc770c6ac99ebf191fc2d6b79c63fb866b338f44fa165c5ee8746352599f1388f92fbd68149dd257040354d'
  //           }
  //     });
  //     console.log(res)
  // }
  // catch(e){
  //     console.log(e);
  // }
  }

  function alert(){
    const ele=document.getElementById("alert-side");
    ele.classList.toggle("hidden")
  }
  
  const [Active,SetActive]=useState('');
  function Play(e){
    // let active=document.getElementById('active')
    console.log(e);
    SetActive(e);
  }
  const [RoomStatus,SetRoomStatus]=useState("Join Room");
  const [Room,SetRoom]=useState("Select Room");
  const [click,Setclick]=useState(0);
  function Name(){
    console.log("HI NAME KO CALL KIYA KYA");
    let data=document.getElementById('default-search')
    if(data.value===""){
      alert()
      Setclick(1)
      SetRoomStatus("Room Not Found")
    }else{
      SetRoomStatus("Successfully Joined");
      SetRoom(data.value)
    }
    data.value=''
  }

  async function Chat(){
    let data=document.getElementById("chat");
    let msg=document.getElementById("chatmsg");
    console.log(msg.value);
    data.innerHTML+= `<div>${msg.value}</div>`
    await databases.createDocument("6462f35ceb505509c4ff","6462f3deb9ff444beaaf",ID.unique(),{chat:msg.value})
    msg.value="";
  }

  return (
    <>
    <Alert fun={alert}/>
    <div className='m-2 p-0 flex sm:flex-row flex-col h-screen sm:space-x-1'>
        <div className='border-2 border-solid border-red-500 sm:w-2/6 sm:m-0 m-2 sm:inline-block '>  
            <SelectRoomButton Name={Name} Status={RoomStatus}/>
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


// Enter Room Name
// Find Room Is Available Or Not ?
// If Room Is Available Then Connect