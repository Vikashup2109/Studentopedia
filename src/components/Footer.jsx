import React from 'react'
import Logo from '../assets/logo.png'
import Photo from "../assets/owner.png"
import { RiYoutubeFill, RiInstagramFill, RiFacebookCircleFill, RiLinkedinBoxFill, RiExternalLinkFill } from 'react-icons/ri'
// import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi'

const Footer = () => {
     return (
          <>
               <footer className='bg-[#141414] pt-8 pb-2 text-white'>
                    <div className='w-7/12 mx-auto items-center space-y-8'>
                         <div className='flex items-center justify-between'>
                              <div className='w-2/6'>
                                   <img src={Logo} alt='Logo' className='w-60 rounded-xl' />
                              </div>
                              <div className='text-center'>
                                   <div className='flex gap-10 items-center text-lg'>
                                        <RiYoutubeFill className='text-5xl' />
                                        <RiInstagramFill className='text-5xl' />
                                        <RiFacebookCircleFill className='text-5xl' />
                                        <RiLinkedinBoxFill className='text-5xl' />
                                   </div>
                                   {/* <div className='my-6 flex gap-16 mx-auto px-auto text-center text-white'>
                                        <span className='w-1/2 text-xl'>Events</span>
                                        <span className='w-1/2 text-xl'>About Us</span>
                                   </div> */}
                              </div>
                         </div>
                         <div className='flex gap-16 mx-auto justify-between text-white'>
                              <div className='flex items-center gap-8'>
                                   <img src={Photo} alt="Owner" className='w-16 rounded-xl' />
                                   <div className='flex flex-col'>
                                        <span className='text-lg font-mono'>Owned and Managed by</span>
                                        <span className='text-xl font-mono flex items-center gap-4'>Harshit Shakya <RiExternalLinkFill /></span>
                                   </div>
                              </div>
                              <div className='items-center my-auto pr-10    space-x-10'>
                                   <button type="submit" className='px-4 py-2 rounded-xl border-2 border-white  text-white hover:bg-white hover:!text-[#141414] cursor-pointer'>Call Us</button>
                                   <button type="submit" className='px-4 py-2 rounded-xl border-2 border-white  text-white hover:bg-white hover:!text-[#141414] cursor-pointer'>Donate Us</button>
                              </div>
                         </div>
                         <div className='mx-auto w-fit pt-8'>
                              <span className='text-center text-sm'>Copyright © 2023 Studentopedia. All rights Reserved.</span>
                         </div>
                    </div>
               </footer>
          </>
     )
}

export default Footer