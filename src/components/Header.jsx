import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Header = () => {
     return (
          <>
               <header className=' w-full shadow-md'>
                    <nav className='w-11/12 sm:w-9/12 mx-auto flex justify-between h-16 items-center'>
                         <div className='w-20'>
                              <a href="/">
                                   <img src={Logo} alt='Logo' />
                              </a>
                         </div>
                         <div className=''>
                              <ul className='flex gap-10 items-center text-lg'>
                                   <Link to="/events">
                                        <li className='cursor-pointer hidden sm:block'>Events</li>
                                   </Link>
                                   <Link to="/aboutUs">
                                        <li className='cursor-pointer hidden sm:block' >About Us</li>
                                   </Link>
                                   <Link to="/donation">
                                        <button className='px-4 py-2 rounded-xl border-2 !border-primary !bg-white text-black hover:!text-white hover:!bg-primary cursor-pointer hidden sm:block'>Donate</button>
                                   </Link>
                              </ul>
                         </div>
                         <div className='sm:hidden'>
                              <Dropdown>
                                   <Dropdown.Toggle className='!bg-primary !border-primary'>
                                        Menu
                                   </Dropdown.Toggle>
                                   {/* <DropdownButton title="Menu" className='px-4 py-2 rounded-xl border-2 !border-primary !bg-white text-black hover:!text-white hover:!bg-primary cursor-pointer'> */}
                                   <Dropdown.Menu>
                                        <Dropdown.Item href="/events">
                                             <Link to="/events">
                                                  <span className='cursor-pointer'>Events</span>
                                             </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="/aboutUs">
                                             <Link to="/aboutUs">
                                                  <span className='cursor-pointer' >About Us</span>
                                             </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="/donation">
                                             <Link to="/donation">
                                                  <button className=''>Donate</button>
                                             </Link>
                                        </Dropdown.Item>
                                   </Dropdown.Menu>
                                   {/* </DropdownButton> */}
                              </Dropdown>
                         </div>
                    </nav>
               </header>
          </>
     )
}

export default Header