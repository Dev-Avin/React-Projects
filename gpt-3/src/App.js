import React from 'react'

import './App.css'
import './index.css'
// import Article from './Components/article/Article'
// import Brand from './Components/brand/Brand'
// import Cta from './Components/cta/Cta'
// import Feature from './Components/feature/Feature'
// import Navbar from './Components/navbar/Navbar.jsx'
import { Article , Brand , Cta , Feature ,Navbar } from './Components'
import { Blog , Features , Footer ,Header , Possibility ,WhatGPT3 } from './Containers'
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
       <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
     
    </div>
  )
}

export default App