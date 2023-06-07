import React from 'react'
import { useState} from 'react'
import { useEffect } from 'react'
import { databases,ID,client} from '../../services/appwriteConfig'
import {nodedatabase} from '../../services/appwritesdkConfig'
//Component
import Alert from '../component/Alert'
import SelectRoomButton from '../component/SelectRoomButton'
import MessageChat from '../component/MessageChat'
//Use State

import { Query } from 'node-appwrite'
//Image
import ChatLogo from '../assets/Chat.svg'

export default function RoomSelect() {
  
    let JoinR=0;

    const [RoomStatus,SetRoomStatus]=useState("Join Room");
    const [Room,SetRoom]=useState("Select Room");
    const [Join,SetJoin]=useState(false);
    const [RoomId,SetRoomId]=useState('a');
    const [Name,SetName]=useState('UnknownAppwriteUser');
    const [message,setmessage]=useState([
        {
          id:1,
          Messagee: "Heelo Start The Chat !!!"
        },{
          id:2,
          Messagee: "Lets Connect !!"
        }
    ]);

    useEffect(()=>{
      console.log(RoomId)
      let mesg;
      client.subscribe([`databases.6462f35ceb505509c4ff.collections.${RoomId}.documents`],response=>{
          mesg=response.payload.chat
          let data=document.getElementById("chat");
          data.innerHTML+=`<div className="text-pink-500 py-2 m-2 border-pink-500 border-2 border-solid bg-pink-600 font-Poppins" >${Name}:${mesg}</div>`
        });
       
    },[RoomId])


    async function JoinRoom(){
      if(Name!="UnknownAppwriteUser"){
        const x = await nodedatabase.listCollections('6462f35ceb505509c4ff');
        let data=document.getElementById('default-search')
        console.log(data.value);
        if(data.value===""){
            alert("Enter Room Name 🥲")
            Setclick(1);
            SetRoomStatus("Room Not Found")
        }else{

            x.collections.forEach((e)=>{
              if(( e.name == data.value) && !Join){
                SetRoomStatus("Successfully Joined");
                SetRoomId(e.$id);
                SetRoom(data.value)
                SetJoin(true);
                JoinR++;
              }
            });
        }

        if(JoinR<1){
          SetRoomStatus("Room Not Found");
          setTimeout(function(){
            SetRoomStatus("Join Now");
          }, 3000);
        }
      }else{
        alert("Enter You Name First")
      }
  }

  async function Disconnect(){
    await nodedatabase.deleteCollection('6462f35ceb505509c4ff',RoomId);
    SetRoomStatus("Join Now");
    SetRoomId('');
    SetJoin(false)
    let data=document.getElementById('default-search')
    data.value="";
    SetRoom('')
    JoinR--; //Temp Solution
  }

  async function Chat(){
    let data=document.getElementById("chat");
    let msg=document.getElementById("chatmsg");
    if(msg.value!="" && Join){
      await databases.createDocument("6462f35ceb505509c4ff",RoomId,ID.unique(),{chat:msg.value,name:Name})
    }
    msg.value="";
  }

  async function UserName(){
    let name=document.getElementById('default-name').value;
    SetName(name);
  }

  //Subscribe DataBase 
  return (
    <>
    <div className='m-2 p-0 flex sm:flex-row flex-col h-screen sm:space-x-1 '>
        <div className='border-2 border-solid border-pink-500 rounded-lg sm:w-2/6 sm:m-0 m-2 sm:inline-block '>  
            <SelectRoomButton JoinRoom={JoinRoom} Status={RoomStatus} />
            <div className="relative m-2">
                <input type="search" id="default-name" className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500" placeholder="Enter Your Name" required/>
                <button onClick={UserName} className='bg-[#f02e65] p-5 m-2 text-white rounded-full font-Montserrat text-base'>{Name}</button>
            </div>
          { Join && <button onClick={Disconnect} className='bg-[#f02e65] p-5 m-2 text-white rounded-full font-Montserrat text-base'>Disconnect</button> }
          <img src={ChatLogo} className='logo h-[35vh] sm:h-[50vh] '/>
        </div>
        <div className='relative border-2 border-solid border-pink-500 rounded-lg sm:w-4/6 sm:m-0 m-2 inline-block overflow-auto'>
          <div id="chat" className='font-Poppins overflow-auto'>
            <div>Join To {Room}</div>
            {message.map(msg=>(<MessageChat id={msg.id} message={msg.Messagee} {...msg}/>))}
          </div>
            
        </div> 
    </div>
    <div className="m-2">
        <input type="search" id="chatmsg" className="w-full block p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500" placeholder="Send Message" required/>
        <button onClick={Chat}  className="text-white -z-1 mt-1 absolute  bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 sm:py-3 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Send</button>
    </div>
    </>
  )
}



