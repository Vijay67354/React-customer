import React from 'react'
// import TeamCrm from './TeamCrm'
// import Footer from './Footer'

const Services = () => {
    return (
        <>
        <div >
            <div>
            <img src="./images/anim5.png" className='left-0 text-red-700 text-8xl animate-spin lg:ml-[1700px] lg:block hidden top-12'/>
              <img src="./images/anim6.png" className='left-0 text-red-700 text-8xl animate-spin lg:ml-12 lg:block hidden'/>
            {/* <div className='gap- container  mx-auto grid grid-cols-1 lg:grid-cols-3 lg:mt-12'> */}
            <div className='mx-auto container max-w-[1350px] mt-12 mb-12 '>
           <div className='gap-12   grid grid-cols-1 lg:grid-cols-3 lg:ml-[90px]'>
            <div className=''>
                <div className='bg-[#060547] space-y-5 p-4 lg:w-[450px] h-[220px]'>
                    <p className='text-3xl text-white font-bold'>Our Services</p>
                    <div>
                        <p1 className=' text-white font-bold'>Our mission is to enable organisations transform with technology in a digital, mobile-first, data-driven world.</p1>
                    </div>
                </div>
            </div>

            <div className='flex flex-col space-y-5 lg:pl-[80px]'>
                <div className='flex gap-12'>
                  <div className='bg-[#060547] p-[14px]'>
                    <p className='text-4xl text-white'>01</p>
                  </div>
                    <div className=''>
                        <p1 className=' text-black text-[18px] font-medium '>SECURITY</p1>
                        <div>
                        <p1 className=' text-black text-[18px] font-medium  leading-3'>OPERATIONS</p1>  
                        </div>
                    </div>
                </div>

                <div className='flex gap-12'>
                  <div className='bg-[#060547] p-[14px]'>
                    <p className='text-4xl text-white'>03</p>
                  </div>
                  <div className=''>
                        <p1 className=' text-black text-[18px] font-medium '>CLOUD </p1>
                        <div>
                        <p1 className=' text-black text-[18px] font-medium  leading-3'>SERVICES</p1>  
                        </div>
                    </div>
                </div>




                <div className='flex gap-12'>
                  <div className='bg-[#060547] p-[14px]'>
                    <p className='text-4xl text-white'>05</p>
                  </div>
                  <div className=''>
                        <p1 className=' text-black text-[18px] font-medium '>DIGITAL  </p1>
                        <div>
                        <p1 className=' text-black text-[18px] font-medium leading-3'>WORKPLACE</p1>  
                        </div>
                    </div>
                </div>
            </div>

            
            <div className='flex flex-col  space-y-5'>
                <div className='flex gap-12'>
                  <div className='bg-[#060547] p-[14px]'>
                    <p className='text-4xl text-white'>02</p>
                  </div>
                  <div className=''>
                        <p1 className=' text-black text-[18px] font-medium '>INFRASTRUCTURE</p1>
                        <div>
                        <p1 className=' text-black text-[18px] font-medium  leading-3'> MANAGEMENT</p1>  
                        </div>
                    </div>
                </div>

                <div className='flex gap-12'>
                  <div className='bg-[#060547] p-[14px]'>
                    <p className='text-4xl text-white'>04</p>
                  </div>
                  <div className=''>
                        <p1 className=' text-black text-[18px] font-medium '>NETWORK </p1>
                        <div>
                        <p1 className=' text-black text-[18px] font-medium leading-3'>TRANSFORMATION</p1>  
                        </div>
                    </div>
                </div>


                <div className='flex gap-12'>
                  <div className='bg-[#060547] p-[14px]'>
                    <p className='text-4xl text-white'>06</p>
                  </div>
                  <div className=''>
                        <p1 className=' text-black text-[18px] font-medium '>TEAM365  </p1>
                        <div>
                        <p1 className=' text-black text-[18px] font-medium leading-3'>CRM</p1>  
                        </div>
                    </div>
                </div>



              
            </div>

            
           </div>
           </div>
           </div>
                {/* <TeamCrm /> */}
               
{/*                 
                 <Client/>
                 <Partner/>
                 <Sales/>
                 <Great/> */}
             
            </div>
            </>
       
    )
}

export default Services