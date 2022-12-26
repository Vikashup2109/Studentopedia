import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const Header = () => {
     return (
          <>
               <header className='shadow-md'>
                    <nav className='w-9/12 mx-auto flex justify-between h-16 items-center'>
                         <div className='w-20'>
                              <a href="/">
                                   <img src={Logo} alt='Logo' />
                              </a>
                         </div>
                         <div className=''>
                              <ul className='flex gap-10 items-center text-lg'>
                                   <Link to="/events">
                                        <li className='cursor-pointer'>Events</li>
                                   </Link>
                                   <Link to="/aboutUs">
                                        <li className='cursor-pointer' >About Us</li>
                                   </Link>
                                   <Link to="/donation">
                                        <button className='px-4 py-2 rounded-xl border-2 !border-primary !bg-white text-black hover:!text-white hover:!bg-primary cursor-pointer'>Donate</button>
                                   </Link>
                              </ul>
                         </div>
                    </nav>
               </header>
          </>
     )
}

export default Header