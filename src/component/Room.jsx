import React from 'react'
import RoomButton from './RoomButton'

export default function Room({Play}) {
  return (
    <>
    <div className='flex flex-col'>
                <RoomButton RoomName={"Vartalap1"} Play={Play}/>
    </div>
    </>
  )
}
