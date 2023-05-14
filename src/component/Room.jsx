import React from 'react'
import RoomButton from './RoomButton'

export default function Room({Play}) {
  return (
    <>
    <div className='flex flex-col'>
                <RoomButton RoomName={"Vartalap1"} Play={Play}/>
                <RoomButton RoomName={"Vartalap2"} Play={Play} />
                <RoomButton RoomName={"Vartalap3"} Play={Play}/>
                <RoomButton RoomName={"Vartalap4"} Play={Play}/>
                <RoomButton RoomName={"Vartalap5"} Play={Play}/>
                <RoomButton RoomName={"Vartalap6"} Play={Play}/>
                <RoomButton RoomName={"Vartalap7"} Play={Play}/>
    </div>
    </>
  )
}
