import React, { useState } from 'react'
import MenuBar from '../components/MenuBar'
import Analytics from '../components/AnalyticsPage/Analytics'



const HomePage = () => {
  const [drawer, setDrawer] = useState(false)

  return (
    <>
      <div className='w-full max-w-[1536px] m-auto flex'>
        <MenuBar onOpen={setDrawer} drawer={drawer} />
        <Analytics onOpen={setDrawer} />
      </div>
    </>
  )
}

export default HomePage