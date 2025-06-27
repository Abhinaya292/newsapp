import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
//loads only the required pages without loading all at once
let Home = React.lazy(()=>import("./pages/Home"))
let About = React.lazy(()=>import("./pages/About"))
let Contact = React.lazy(()=>import("./pages/Contact"))
let Services = React.lazy(()=>import("./pages/Services"))
let NotFound = React.lazy(()=>import("./pages/NotFound"))
let UpComing = React.lazy(()=>import("./pages/UpComing"))


const App = () => {
  return ( 
    <>
    <Routes>
      {/* public routes */}
      {/* url: localhost:5173--default path */}
      {/* helps us in navigating to Home page with the url path as localhost:5173/home as default path */}
      <Route path='/' element={<Navigate to="/home" replace/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/upcoming' element={<UpComing/>}/>
      {/* not found page */}
      <Route path='*' element={<NotFound/>}/>





    </Routes>
      
    </>
  )
}

export default App
