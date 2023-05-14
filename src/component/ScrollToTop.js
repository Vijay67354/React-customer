import {useEffect} from 'react';
import Header from './Header'
import { AiOutlineArrowUp } from 'react-icons/ai';

export default function ScrollToTop() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
      <Header/>
     

      <div style={{height: '0rem'}} />

      {/* 👇️ scroll to top on button click */}
      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          padding: '1rem 2rem',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          // backgroundColor: '#0C9',
          color: 'red',
          textAlign: 'center',
        }}
      >
        <AiOutlineArrowUp className='text-6xl  text-blue-600'/>
      </button>
    </div>
  );
}