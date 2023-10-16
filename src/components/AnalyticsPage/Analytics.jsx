import React from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'


const Analytics = ({ onOpen }) => {
  return (
    <div className='w-full bg-gray-100 py-8 px-9 lg:w-[85%] '>
      <div className='flex gap-7'>
        <HiMenuAlt2 size={25} className='cursor-pointer lg:hidden' onClick={() => onOpen(true)} />
        <div className='flex items-center gap-1'>
          <h3 className='font-medium text-lg'>Hi Melisa</h3><span>👋,</span>
        </div>
      </div>
    </div>
  )
}

export default Analytics

