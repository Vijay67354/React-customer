import React from 'react'

const TeamCrm = () => {
  return (
    <div className='bg-[#F5F9FF] w-[100%] h-[600px] '>
        <div className='  pt-[90px] grid grid-cols-2 max-w-[1150px] lg:grid-cols-2 container  gap-9 sm:grid-cols-2 md:grid-cols-2'>
            <div className=' grid bg-white pb-5 '>
                <div className='relative -top-6'>
                <div className='bg-[#180F5E] rounded-full w-[70px] h-[70px] mx-auto  p-3  positive top-12'>
                    <img src="./images/send.png" className='positive top-12 text-center hover:animate-spin '/>
                </div>
                </div>
                <p className='text-center text-black text-2xl text-bold'>DATA CENTER SOLUTIONS</p>
 <p1 className='text-center  text-black pt-2'>Create a Better Tomorrow with High Performance Data Centers</p1>
            </div>

            <div className=' grid bg-white pb-5'>
                <div className='relative -top-6'>
                <div className='bg-[#180F5E] rounded-full w-[70px] h-[70px] mx-auto  p-3  positive top-12'>
                    <img src="./images/portfolio.png" className='positive top-12 text-center   hover:animate-spin'/>
                </div>
                </div>
                <p className='text-center text-black text-2xl text-bold'>BUSINESS APPLICATION</p>
 <p1 className='text-center  text-black pt-2'>Smart Business Applications for the Enterprises of Tomorrow</p1>
            </div>

            <div className=' grid bg-white pb-5'>
                <div className='relative -top-6'>
                <div className='bg-[#180F5E] rounded-full w-[70px] h-[70px] mx-auto  p-3  positive top-12'>
                    <img src="./images/update.png" className='positive top-12 text-center  hover:animate-spin'/>
                </div>
                </div>
                <p className='text-center text-black text-2xl text-bold'>SOFTWARE LIC.</p>
 <p1 className='text-center  text-black pt-2'>Software Lic. Management is Strategic to Your Business</p1>
            </div>
            <div className=' grid bg-white pb-5 '>
                <div className='relative -top-6'>
                <div className='bg-[#180F5E] rounded-full w-[70px] h-[70px] mx-auto  p-3  positive top-12'>
                    <img src="./images/crm.png" className='positive top-12 text-center   hover:animate-spin'/>
                </div>
                </div>
                <p className='text-center text-black text-2xl text-bold'>TEAM365 CRM</p>
 <p1 className='text-center  text-black pt-2 '>Team365 CRM Solutions can make you efficient and truly agile.</p1>
            </div>
        </div>
        
    </div>
  )
}

export default TeamCrm