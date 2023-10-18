import React from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'
import StatusCard from './widgets/StatusCard'
import OverviewChart from './widgets/OverviewChart'
import CustomerChart from './widgets/CustomerChart'
import ProductSell from '../../data/ProductSell'

const Analytics = ({ onOpen }) => {

  return (
    <div className='w-full px-4 bg-gray-100 py-8 md:px-9 lg:w-[85%] md:h-screen overflow-auto'>
      <div className='flex gap-7'>
        <HiMenuAlt2 size={25} className='cursor-pointer lg:hidden' onClick={() => onOpen(true)} />
        <div className='flex items-center gap-1'>
          <h3 className='font-medium text-lg'>Hi Melisa</h3><span>👋,</span>
        </div>
      </div>
      < div className='mt-6 grid gap-7 grid-cols-1 items-center sm:grid-cols-2 xl:grid-cols-4' >
        <StatusCard title={'Earnings'} color={'green'} growth={37.8} stats={198} bgColor={'bg-green-200'} />
        <StatusCard title={'Orders'} color={'purple'} growth={-2} stats={2.4} bgColor={'bg-purple-200'} />
        <StatusCard title={'Balance'} color={'blue'} growth={-2} stats={2.4} bgColor={'bg-blue-200'} />
        <StatusCard title={'Total Sales'} color={'red'} growth={11} stats={89} bgColor={'bg-red-200'} />
      </ div>
      <div className='my-8 flex flex-col xl:flex-row gap-5'>
        <div className='w-full bg-white p-6 rounded-lg xl:w-[62%]'>
          <div className='flex items-center justify-between mb-3'>
            <div>
              <h3 className='text-black font-semibold text-sm md:text-base'>Overview</h3>
              <h3 className='text-slate-400 text-xs md:text-sm'>Monthly Earning</h3>
            </div>

            <select name="report" id="report" className='text-slate-400 text-xs px-2 py-1 rounded-md'>
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
          <OverviewChart />
        </div>
        <div className='w-full xl:w-[38%]'>
          <CustomerChart />
        </div>
      </div>
      <div className='w-full my-8 bg-white rounded-t-lg border-b-slate-300 border-b-2'>
        <div className='w-full flex flex-col items-start md:flex-row justify-between md:items-center py-4 px-5'>
          <h4 className='text-base font-semibold mb-3 md:text-xl md:mb-0'>Product Sell</h4>
          <div className='w-full flex flex-col gap-5 md:flex-row md:w-[60%] justify-end lg:w-[40%]'>
            <div className='w-[50%] flex items-center bg-gray-100 gap-2 px-3 py-2 rounded-md'>
              <FiSearch size={20} color='#373737' />
              <input type="text" placeholder='Search' className='w-full bg-gray-100 text-sm text-slate-400 placeholder:text-slate-400 placeholder:text-sm font-medium focus:outline-none' />
            </div>
            <div>
              <select name="sell" id="sell" className='text-slate-500 text-xs px-3 py-2 rounded-md'>
                <option value="30">Last 30 days</option>
                <option value="60">Last 60 days</option>
                <option value="90">Last 90 days</option>
              </select>
            </div>
          </div>
        </div>
        <div className='py-3 px-5 border-b-slate-300 border-b-2'>
          <table className='w-full'>
            <colgroup>
              <col className='w-[35%] md:w-[60%]' />
              <col className='w-[21%] md:w-[15%]' />
              <col className='w-[21%] md:w-[15%]' />
              <col className='w-[23%] md:w-[10%]' />
            </colgroup>
            <thead>
              <tr className='text-xs font-medium text-slate-400 text-center md:text-sm md:font-semibold'>
                <th className='text-start'>Product Name</th>
                <th>Stock</th>
                <th >Price</th>
                <th>Total Sales</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className='py-2 px-5'>
          <table className='w-full border-collapse'>
            <colgroup>
              <col className='w-[35%] md:w-[60%]' />
              <col className='w-[22%] md:w-[15%]' />
              <col className='w-[22%] md:w-[15%]' />
              <col className='w-[21%] md:w-[10%]' />
            </colgroup>
            <tbody>
              {ProductSell.map(product => {
                return (
                  <tr className='text-center text-xs hover:opacity-70 cursor-pointer md:text-sm' key={product.id}>
                    <td className='text-start border-0'>
                      <div className='flex flex-col items-start gap-3 my-4 md:flex-row mg:gap-5'>
                        <div className='bg-blue-300 w-full h-[57px] rounded-lg sm:w-[80%] sm:h-[75px] lg:w-[16%] lg:h-[57px]'>
                          <img src={product.img}
                            alt={product.name}
                            className='object-cover w-full h-full rounded-lg'
                          />
                        </div>
                        <div>
                          <h4 className='font-semibold text-sm md:text-lg'>{product.name}</h4>
                          <p className='text-xs text-slate-400 md:text-sm'>{product.desc}</p>
                        </div>
                      </div>
                    </td>
                    <td>32 in stock</td>
                    <td className='font-semibold'>$ 45.99</td>
                    <td>20</td>
                  </tr>
                )
              })}

            </tbody>
          </table>
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
