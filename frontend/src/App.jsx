
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const ClerkProtected = ({children}) =>{
  <>
    
  </>
}



function App() {
  return (
   <Routes>
        <Route path='/' element={<Home />} />
   </Routes>
  )
}

export default App