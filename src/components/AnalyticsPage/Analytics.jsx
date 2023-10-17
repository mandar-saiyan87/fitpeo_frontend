import React from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'
import StatusCard from './widgets/StatusCard'
import OverviewChart from './widgets/OverviewChart'
import CustomerChart from './widgets/CustomerChart'

const Analytics = ({ onOpen }) => {
  return (
    <div className='w-full bg-gray-100 py-8 px-9 lg:w-[85%] '>
      <div className='flex gap-7'>
        <HiMenuAlt2 size={25} className='cursor-pointer lg:hidden' onClick={() => onOpen(true)} />
        <div className='flex items-center gap-1'>
          <h3 className='font-medium text-lg'>Hi Melisa</h3><span>👋,</span>
        </div>
      </div>
      < div className='mt-6 grid gap-7 grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-4' >
        <StatusCard title={'Earnings'} color={'green'} growth={37.8} stats={198} bgColor={'bg-green-200'} />
        <StatusCard title={'Orders'} color={'purple'} growth={-2} stats={2.4} bgColor={'bg-purple-200'} />
        <StatusCard title={'Balance'} color={'blue'} growth={-2} stats={2.4} bgColor={'bg-blue-200'} />
        <StatusCard title={'Total Sales'} color={'red'} growth={11} stats={89} bgColor={'bg-red-200'} />
      </ div>
      <div className='my-8 flex'>
        <div className='w-[62%] bg-white p-6 rounded-lg'>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='text-black font-semibold'>Overview</h3>
              <h3 className='text-slate-400 text-sm'>Monthly Earning</h3>
            </div>

            <select name="report" id="report" className='text-slate-400 text-xs px-2 py-1 rounded-md'>
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Yearly">Yearly</option>
            </select>

          </div>
          <OverviewChart />
        </div>
        <div className='w-[38%]'>
          <CustomerChart />
        </div>
      </div>

    </div>
  )
}

export default Analytics

{/* < div className = 'mt-6 grid gap-7 grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-4' >
      <StatusCard title={'Earnings'} color={'green'} growth={37.8} stats={198} bgColor={'bg-green-200'} />
      <StatusCard title={'Orders'} color={'purple'} growth={-2} stats={2.4} bgColor={'bg-purple-200'} />
      <StatusCard title={'Balance'} color={'blue'} growth={-2} stats={2.4} bgColor={'bg-blue-200'} />
      <StatusCard title={'Total Sales'} color={'red'} growth={11} stats={89} bgColor={'bg-red-200'} />
    </ div> */}
