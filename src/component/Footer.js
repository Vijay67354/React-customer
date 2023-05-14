import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#323Db3] pt-12 pb-12'>
        <div className='grid grid-cols-1 lg:grid-cols-4  gap-8 container'>
            <div className='grid '>
                <img src="./images/logo-allegient.png"/>
                <p className='text-white '>Welcome to Allegient Unified Technology, one of the leading complete IT Infrastructure Services, solution and consulting companies in India.</p>
               
               <div>
               <p className='text-white '>@2021 Allegient Unified Technology Pvt.Ltd.</p>
               </div>
                
            </div>
            
            <div className='grid'>
         <div>
            <p className='text-white lg:mt-[100px]' >Cyber Security Integrator & Consulting</p>

         </div>
         
         <div>
            <p className='text-white'>Backup</p>
         </div>
         <div>
            <p className='text-white'>Cyber Security Integrator & Consulting</p>
         </div>
         <div>
            <p className='text-white'>Hybrid Cloud</p>
         </div>
         <div>
            <p className='text-white'>Azure Cloud</p>
         </div>

        
            </div>
            <div className='grid'>
            <div>
            <p className='text-white lg:mt-[100px]'>Virtual Manufacture Infacture</p>
         </div>

         <div>
            <p className='text-white'>Digital Workplace</p>
         </div>

         <div>
            <p className='text-white'>Communication Collaboration</p>
         </div>

         <div>
            <p className='text-white'>Mobility</p>
         </div>
         <div>
            <p className='text-white'>Business Intelligence</p>
         </div>
            </div>
            <div className='grid space-y-3'>
            <div>
            <p className='text-white lg:mt-[100px]'>Network Tranformation</p>
         </div>

         <div>
            <p className='text-white'>Digital Workplace</p>
         </div>

         <div>
            <p className='text-white'>Communication Collaboration</p>
         </div>

         <div>
            <p className='text-white'>Mobility</p>
         </div>
         <div>
            <p className='text-white'>Business Intelligence</p>
         </div>
<div className='flex gap-2'>
<div>
         <span className='text-white pl-9'>Made With | Made in India </span>
         </div>
         <div>
         <img src="./images/Indias.png" className='w-5 5 pt-1'/>
         </div>
         </div>
            </div>
        </div>
    </div>
  )
}

export default Footer