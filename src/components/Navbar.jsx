import React, {useState} from 'react'
import {BiSearch} from 'react-icons/bi'   // react-icon
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'

export const Navbar = () => {

  const [nav, setNav] = useState(false);
  const [logo , setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav)
    setLogo(!logo)
  }
  return (
    <div className='flex w-full justify-between items-center shadow-xl  md:h-20 px-4 absolute z-10 text-white'>
<div >
<h1 onCick={handleNav} className={logo ? 'hidden' : 'block'}>Travel</h1>
</div>
   <ul className=' hidden md:flex'>
     <li>Home</li>   
     <li>View</li>
     <li>Travel</li>
     <li>places</li>
     </ul>     
<div className='hidden md:flex'>
<BiSearch size ={20} />
</div>

{/* hamburger */}
<div onClick ={handleNav}className='md:hidden z-10'>
  {nav ? <AiOutlineClose className="text-black" size={20} /> :<HiOutlineMenuAlt4 size ={20} /> }

</div>
{/* drop down */}

<div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7  flex-col' : 'absolute left-[-100%]' }>  
  <ul>
    <h1>Travel</h1>
  <li>Home</li>   
     <li>View</li>
     <li>Travel</li>
     <li>places</li>
  </ul>
  <div className='flex flex-col'>
  <button>Search</button>
  </div>
</div>
    </div>
  )
}
