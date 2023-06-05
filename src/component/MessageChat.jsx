import React from 'react'

export default function MessageChat({id,message}) {
  return (
    <>
    <div key={id} className='font-Poppins text-base text-pink-600' >{message}</div>
    </>
  )
}
