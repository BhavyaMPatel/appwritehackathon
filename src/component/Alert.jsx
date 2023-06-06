import React from 'react'

export default function Alert({fun,style}) {
  return (
    <>
    <div id='alert-side' className='hidden flex flex-wrap bg-[#f02e65] text-white m-2 p-2 sm:m-5 sm:p-3 text-xs rounded-full justify-center items-center font-Poppins'>
    <div className=''>Please Enter Proper Room Name</div>
      <svg className='m-2' onClick={fun} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
      </svg>
    </div>
    </>
  )
}
