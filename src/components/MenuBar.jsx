import React, { useState } from 'react'
import { PiCodesandboxLogo } from 'react-icons/pi'
import { BiShow, BiChevronRight, BiWalletAlt, BiHelpCircle, BiChevronDown } from 'react-icons/bi'
import { GrCodepen } from 'react-icons/gr'
import { BsPersonVideo } from 'react-icons/bs'
import { LuBadgePercent } from 'react-icons/lu'
import { AiOutlineClose } from 'react-icons/ai'


const MenuBar = ({ drawer, onOpen }) => {

  const [active, setActive] = useState('Dashboard')

  const handleActive = (tab) => {
    setActive(tab)
  }

  return (

    <>
      {/* DESKTOP MENU */}

      <div className='hidden bg-[#040440] h-screen lg:inline w-[20%] xl:w-[17%]'>
        <div className='py-8 px-3 flex flex-col justify-between h-full'>
          <div className='px-2'>
            <div className='flex items-center gap-2'>
              <PiCodesandboxLogo color='white' size={30} />
              <h3 className='text-white text-xl font-semibold tracking-wide'>Dashboard</h3>
            </div>
            <div className='mt-7'>
              <div className={`flex items-center justify-between rounded-lg text-white/50 px-2 py-3 my-3 cursor-pointer ${active === 'Dashboard' && 'bg-[#2d2d69] text-white/90 font-medium'}`} onClick={() => handleActive('Dashboard')}>
                <div className='flex items-center gap-2.5'>
                  <BiShow size={20} />
                  <h4 className='text-sm'>Dashboard</h4>
                </div>
                {active != 'Dashboard' && <BiChevronRight />}
              </div>
              <div className={`flex items-center justify-between rounded-lg text-white/50 px-2 py-3 my-3 cursor-pointer ${active === 'Product' && 'bg-[#2d2d69] text-white/90 font-medium'}`} onClick={() => handleActive('Product')}>
                <div className='flex items-center gap-2.5'>
                  <GrCodepen size={20} />
                  <h4 className='text-sm'>Product</h4>
                </div>
                {active != 'Product' && <BiChevronRight />}
              </div>
              <div className={`flex items-center justify-between rounded-lg text-white/50 px-2 py-3 my-3 cursor-pointer ${active === 'Customers' && 'bg-[#2d2d69] text-white/90 font-medium'}`} onClick={() => handleActive('Customers')}>
                <div className='flex items-center gap-2.5'>
                  <BsPersonVideo size={20} />
                  <h4 className='text-sm'>Customers</h4>
                </div>
                {active != 'Customers' && <BiChevronRight />}
              </div>
              <div className={`flex items-center justify-between rounded-lg text-white/50 px-2 py-3 my-3 cursor-pointer ${active === 'Income' && 'bg-[#2d2d69] text-white/90 font-medium'}`} onClick={() => handleActive('Income')}>
                <div className='flex items-center gap-2.5'>
                  <BiWalletAlt size={20} />
                  <h4 className='text-sm'>Income</h4>
                </div>
                {active != 'Income' && <BiChevronRight />}
              </div>
              <div className={`flex items-center justify-between rounded-lg text-white/50 px-2 py-3 my-3 cursor-pointer ${active === 'Promote' && 'bg-[#2d2d69] text-white/90 font-medium'}`} onClick={() => handleActive('Promote')}>
                <div className='flex items-center gap-2.5'>
                  <LuBadgePercent size={20} />
                  <h4 className='text-sm'>Promote</h4>
                </div>
                {active != 'Promote' && <BiChevronRight />}
              </div>
              <div className={`flex items-center justify-between rounded-lg text-white/50 px-2 py-3 my-3 cursor-pointer ${active === 'Help' && 'bg-[#2d2d69] text-white/90 font-medium'}`} onClick={() => handleActive('Help')}>
                <div className='flex items-center gap-2.5'>
                  <BiHelpCircle size={20} />
                  <h4 className='text-sm'>Help</h4>
                </div>
                {active != 'Help' && <BiChevronRight />}
              </div>
            </div>
          </div>
          <div className='text-white/50 flex items-center justify-between bg-[#2d2d69] py-2 px-2.5 rounded-md'>
            <div className='flex items-center gap-2.5'>
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" alt="person" className='w-9 h-9 rounded-full' />
              <div>
                <h4 className='text-xs text-white font-medium'>Melisa</h4>
                <h4 className='text-xs'>Project Manager</h4>
              </div>
            </div>
            <BiChevronDown size={20} className='cursor-pointer' />
          </div>
        </div>
      </div>

      {/* MOBILE & TABLET MENU */}
      <div className={drawer ? 'fixed top-0 left-0 w-full h-screen bg-black/5 lg:hidden' : ''} onClick={() => onOpen(false)}>
        <div className={drawer ? 'fixed top-0 left-0 h-screen bg-[#040440] overflow-auto ease-in duration-500 w-[65%] sm:w-[40%] md:w-[30%]' : 'fixed left-[-100%] ease-in duration-500 top-0 lg:hidden'} onClick={(event) => event.stopPropagation()}>
          <div className='py-8 px-3 flex flex-col justify-between h-full'>
            <div className='px-2'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <PiCodesandboxLogo color='white' size={20} />
                  <h3 className='text-white font-semibold tracking-wide'>Dashboard</h3>
                </div>
                <div>
                  <AiOutlineClose color='white' className='cursor-pointer hover:scale-110 duration-300 ease-in' onClick={() => onOpen(false)} />
                </div>
              </div>
              <div className='mt-7'>
                <div className={`flex items-center justify-between rounded-lg text-white/50 px-2 py-3 my-3 cursor-pointer ${active === 'Dashboard' && 'bg-[#2d2d69] text-white/90 font-medium'}`} onClick={() => handleActive('Dashboard')}>
                  <div className='flex items-center gap-2.5'>
                    <BiShow size={20} />
                    <h4 className='text-sm'>Dashboard</h4>
                  </div>
                  {active != 'Dashboard' && <BiChevronRight />}
                </div>
                <div className={`flex items-center justify-between rounded-lg text-white/50 px-2 py-3 my-3 cursor-pointer ${active === 'Product' && 'bg-[#2d2d69] text-white/90 font-medium'}`} onClick={() => handleActive('Product')}>
                  <div className='flex items-center gap-2.5'>
                    <GrCodepen size={20} />
                    <h4 className='text-sm'>Product</h4>
                  </div>
                  {active != 'Product' && <BiChevronRight />}
                </div>
                <div className={`flex items-center justify-between rounded-lg text-white/50 px-2 py-3 my-3 cursor-pointer ${active === 'Customers' && 'bg-[#2d2d69] text-white/90 font-medium'}`} onClick={() => handleActive('Customers')}>
                  <div className='flex items-center gap-2.5'>
                    <BsPersonVideo size={20} />
                    <h4 className='text-sm'>Customers</h4>
                  </div>
                  {active != 'Customers' && <BiChevronRight />}
                </div>
                <div className={`flex items-center justify-between rounded-lg text-white/50 px-2 py-3 my-3 cursor-pointer ${active === 'Income' && 'bg-[#2d2d69] text-white/90 font-medium'}`} onClick={() => handleActive('Income')}>
                  <div className='flex items-center gap-2.5'>
                    <BiWalletAlt size={20} />
                    <h4 className='text-sm'>Income</h4>
                  </div>
                  {active != 'Income' && <BiChevronRight />}
                </div>
                <div className={`flex items-center justify-between rounded-lg text-white/50 px-2 py-3 my-3 cursor-pointer ${active === 'Promote' && 'bg-[#2d2d69] text-white/90 font-medium'}`} onClick={() => handleActive('Promote')}>
                  <div className='flex items-center gap-2.5'>
                    <LuBadgePercent size={20} />
                    <h4 className='text-sm'>Promote</h4>
                  </div>
                  {active != 'Promote' && <BiChevronRight />}
                </div>
                <div className={`flex items-center justify-between rounded-lg text-white/50 px-2 py-3 my-3 cursor-pointer ${active === 'Help' && 'bg-[#2d2d69] text-white/90 font-medium'}`} onClick={() => handleActive('Help')}>
                  <div className='flex items-center gap-2.5'>
                    <BiHelpCircle size={20} />
                    <h4 className='text-sm'>Help</h4>
                  </div>
                  {active != 'Help' && <BiChevronRight />}
                </div>
              </div>
            </div>
            <div className='text-white/50 flex items-center justify-between bg-[#2d2d69] py-2 px-2.5 rounded-md mb-5'>
              <div className='flex items-center gap-2.5'>
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" alt="person" className='w-9 h-9 rounded-full' />
                <div>
                  <h4 className='text-xs text-white font-medium'>Melisa</h4>
                  <h4 className='text-xs'>Project Manager</h4>
                </div>
              </div>
              <BiChevronDown size={20} className='cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuBar