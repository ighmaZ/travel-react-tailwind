import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import travel from '../imgs-vids/travel.mp4'


const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <video classname='w-full h-full object-cover'
         src={travel}
         autoPlay 
         loop 
         muted />
<div className='absolute w-full h-full top-0 left-0 bg-gray-900/20'></div> 
   
   <div className=' absolute top-0 w-full h-full  flex flex-col justify-center text-center text-white p-4'>
       <h1 className='text-5xl'>Love Travelling?</h1>
       <h3 className='py-4'> Find Your Favourite Destination</h3>
       <form 
       className=' flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
       rounded-md text-black bg-gray-100/90'>
           <div>
               <input className='bg-transparent w-[300px] sm:w-[400] focus:outline-none' type="text" placeholder='Search Destination' />
           </div>
           <div>
               <button><AiOutlineSearch size={20} className='icon' /></button>
           </div>
       </form>
   </div>   
   
    </div>
   


  )
}

export default Hero