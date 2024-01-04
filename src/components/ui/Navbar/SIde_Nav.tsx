"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu, GiHummingbird } from "react-icons/gi";

const SIde_Nav = () => {
  const [showNavBar, setShowNavBar] = useState<boolean>(false)

  const Links =[
      {name:"HOME",link:"/"},
      {name:"ARCHIVE",link:"/archive"},
    ];
  const hamburgerHandler = () => {
    setShowNavBar(prevData => !prevData);
  // console.log(showNavBar)

  };
 
  return (
    <div className=' pt-16   bg-sky-400 font-black text-xl tracking-widest'>
  <div className='absolute right-8 top-6 lg:hidden'>
    <GiHamburgerMenu size={'2rem'} onClick={hamburgerHandler} />
  </div>

  <ul className={`w-full absolute z-999  bg-white  pl-9 transition-all duration-500 ease-in ${showNavBar ? 'top-16' : 'top-[-490px]'}  lg:flex lg:justify-end lg:p-5 pb-12 lg:top-2  lg:bg-inherit ` }>
    {
      Links.map((link) => (
        <li key={link.name} className='lg:ml-8 text-xl lg:my-0 my-7'>
          <Link href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>
            {link.name}
          </Link>
        </li>
      ))
    }
  </ul>
</div>
  )
}

export default SIde_Nav