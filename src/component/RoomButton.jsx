import React from 'react'

function RoomButton({RoomName,Play}) {
  return (
    <div className='sm:w-1/4 w-1/3'>
    <button className='bg-pink-400 m-3 p-2' onClick={(e)=>{Play(e.target.innerText)}}>{RoomName}</button>
    </div>
  )
}

export default RoomButton