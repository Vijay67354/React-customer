import { useState, useEffect } from 'react';
 // import the CSS file with the animation styles

import { FaThumbsUp } from 'react-icons/fa';
import {FaDownload} from 'react-icons/fa'
import {BsEmojiSmileFill} from 'react-icons/bs'
import {MdFrontHand} from 'react-icons/md'


function Great() {
  const [count, setCount] = useState(12);
  const [countss, setCountss] = useState(100);
  const [countms, setCountms] = useState(5000);

  const [countmd, setCountmd] = useState(100);
  const [countme, setCountme] = useState(6);



  useEffect(() => {
    // Use a timer to increment the count every second
    const interval = setInterval(() => {
      setCount(count => count + 1);
    }, 100);

    const intervals= setInterval(() => {
        setCountss(countss => countss + 1);
      }, 400);


      const intervalms= setInterval(() => {
        setCountms(countms => countms + 1);
      }, 300);


      const intervalmd= setInterval(() => {
        setCountms(countmd => countmd + 1);
      }, 200);



    //   const intervalme= setInterval(() => {
    //     setCountme(countme => countme + 1);
    //   }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=' bg-[#f8f9fa] w-[100%] '>
    <div className='mx-auto container pt-[80px] pb-[90px] items-center'>
        <p className='text-3xl font- text-center pt-3 pb-12'>A Few Things We're Great</p>
    <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 mx-auto container lg:pl-[130px]  items-center'>
   <div className='grid'>
    <div className='flex gap-3 pb-3'>
    <div>

   <FaThumbsUp className=' text-5xl text-[#373074]'/>
      </div>
      <div>
      <span className="countss  text-4xl text-[#373074]">{countss}+</span>
      </div>

    </div>
    <p className='font-semibold text-[16px]'>Years of Success</p>
    </div>


      <div className='grid'>
      <div className='flex gap-3 pb-3'>
    <div>

   <FaDownload className=' text-5xl text-[#373074]'/>
      </div>
      <div>
      <span className="countss  text-4xl text-[#373074]">{countss}%</span>
      </div>

    </div>
    <p className='font-semibold text-[16px]'>Successful Deployment Rate</p>
    </div>
    



    <div className='grid'>
      <div className='flex gap-3 pb-3'>
    <div>

   <BsEmojiSmileFill className=' text-5xl text-[#373074]'/>
      </div>
      <div>
      <span className="countss  text-4xl text-[#373074]">{countms}+</span>
      </div>

    </div>
    <p className='font-semibold text-[16px]'>Happy Customers</p>
    </div>

    <div className='grid'>
      <div className='flex gap-3 pb-3'>
    <div>

   <MdFrontHand className=' text-5xl text-[#373074]'/>
      </div>
      <div>
      <span className="countss  text-4xl text-[#373074]">{countms}+</span>
      </div>

    </div>
    <p className='font-semibold text-[16px]'>Strong Workforce</p>
    </div>

</div>
</div>
</div>
  );
}
export default Great