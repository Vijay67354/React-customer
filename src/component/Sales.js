import React from 'react'

const Sales = () => {
  return (
    <div className='bg-[#8dc7df] bg-blue-600/30 backdrop-brightness-75 bg-no-repeat bg-center  bg-cover'>
         <img src="./images/india.jpg" className='absolute w-full bg-no-repeat bg-center  h-[370px]  bg-cover'/>  
         <div class="w-full flex  justify-center items-center 
             bg-blue-300/70 backdrop-brightness-75 h-[370px]">
         <div className='container mx-auto max-w-[1220px]  '>
        <div className='grid grid-cols-1 justify-between  lg:grid-cols-2 relative '>
       
        











        {/* <div className='container mx-auto'></div> */}
        <div className=''>
            <div className='grid relative '>
                <p className='text-[32px] font-medium'>Join Our Top Related Sales CRM</p>
                <div>
                    <p>Now Help Your Sales, Marketing, Account and IT Team to work together at one place</p>
                    </div>
            </div>
            </div>     
            <div className='col-5 lg:ml-[340px] ml-0'>
            <div className='grid relative '>
                <button className='bg-gray-800 text-white lg:p-4 lg:mt-0 mt-4 lg:text-[18px] font-bold border-3 border-black'>Get Started Today</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Sales