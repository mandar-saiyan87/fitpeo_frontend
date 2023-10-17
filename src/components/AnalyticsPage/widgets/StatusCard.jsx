import React from 'react'
import { HiOutlineCurrencyDollar, HiOutlineShoppingBag } from 'react-icons/hi2'
import { BiWalletAlt } from 'react-icons/bi'
import { LiaFileAlt } from 'react-icons/lia'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'

const StatusCard = ({ title, color, growth, stats, bgColor }) => {

  var grNum = ''
  const growthNum = String(growth)
  if (growthNum.includes('-')) {
    grNum = growthNum.substring(1)
  } else {
    grNum = growthNum
  }

  return (
    <div className='flex w-full justify-center'>
      <div className='bg-white w-[90%] flex items-center justify-center py-5 px-3 gap-3 rounded-lg lg:w-full'>
        <div className={`${bgColor} p-6 rounded-full`}>
          {title === 'Earnings' ? <HiOutlineCurrencyDollar size={50} color={color} /> :
            title === 'Orders' ? <LiaFileAlt size={50} color={color} /> :
              title === 'Balance' ? <BiWalletAlt size={50} color={color} /> :
                title === 'Total Sales' && <HiOutlineShoppingBag size={50} color={color} />
          }

        </div>
        <div>
          <h4 className='text-xs text-slate-400 font-medium'>{title}</h4>
          <p className='text-xl font-semibold'>${stats}k</p>
          <div className='flex items-center text-xs'>
            {growth >= 0 ? <AiOutlineArrowUp color='green' /> : <AiOutlineArrowDown color='red' />}

            <p className={`font-semibold ${growth >= 0 ? 'text-green-700' : 'text-red-700'}`}>{grNum}%<span className='text-black font-normal'> this month</span></p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default StatusCard
