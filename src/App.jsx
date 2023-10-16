import React, { useState } from 'react'
import HomePage from './pages/HomePage'

function App() {

  const [drawer, setDrawer] = useState(false)

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
