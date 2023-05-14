import React from 'react'
import Navbar from './Navbar'
import TeamCrm from './TeamCrm'
import Services from './Services'
import Footer from './Footer'
import Partner from './Partner'
import Great from './Great'
import Client from './Client'
import Sales from './Sales'
const Header = () => {

  return (
   <div> 
    <Navbar/>
    <div>
        
        <img src="./images/banner.png" className='relative  lg:h-[100%] h-[600px] '/>
        <img src='./images/vactor7.png' className="lg:absolute lg:top-[10%] ball  lg:block hidden"/>
        <img src='./images/vactor8.png' className="lg:absolute lg:right-0  lg:top-[30%] ball lg:block hidden"/>
        <p className='text-center lg:text-4xl text-white font-bold lg:top-[40%]  lg:left-[43%] top-[30%] left-[100px] text-2xl absolute'>We Are Here For You</p>
        <p className='text-center lg:text-4xl text-white font-bold lg:top-[46%] lg:left-[33%] top-[35%]  text-2xl    absolute'>As Your Partner For Stability & Innovation</p>
        <p className='text-center lg:text-5xl text-white font-bold absolute lg:top-[52%] top-[44%] text-2xl lg:left-[37%] left-[16%]'>In Times Of Uncertainty</p>
        <button className=' border-2 border-white p-3  rounded-full absolute top-[60%] left-[46%] text-2xl text-white'>Team 365 CRM</button>
  
    </div>
    <Services/>
<TeamCrm/>
<Partner/>
<Great/>
<Client/>
<Sales/>
<Footer/>
    </div>
  )
}

export default Header

