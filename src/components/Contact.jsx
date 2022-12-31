import React, { useRef } from 'react'
// import emailjs from '@emailjs/browser';

const Contact = () => {
     return (
          <>
               <section className='w-full mx-auto pt-6 !bg-[#141414]'>
                    <div className='w-11/12 md:w-10/12 lg:9/12 mx-auto'>
                         <h1 className=' !text-white text-3xl font-bold'>Get in Touch</h1>
                         <div className='lg:w-8/12 flex flex-col sm:flex-row sm:w-11/12 mx-auto pt-8 pb-16 justify-between'>
                              <div className='text-center'>
                                   <span className='!text-white text-lg'>Contact Us</span>
                                   <div className="flex flex-row sm:!flex-col justify-center w-72 sm:w-60 lg:w-72 mx-auto border border-white border-opacity-30 rounded-xl text-center px-4 sm:px-4 py-2 my-10">
                                        <h3 className="title text-sm font-bold !text-white">Whatsapp: </h3>
                                        <span className="data text-sm block lg:block !text-white"> +91 6387768007</span>
                                   </div>
                                   <div className="flex flex-row sm:!flex-col justify-center w-72 sm:w-60 lg:w-72 mx-auto border !border-white border-opacity-30 rounded-xl text-center px-4 sm:px-4 py-2">
                                        <h3 className="title text-sm font-bold !text-white">Email:</h3>
                                        <span className="data text-sm block lg:block !text-white">2019kuec1042@iiitkota.ac.in</span>

                                   </div>
                                   <div className="flex flex-row sm:!flex-col justify-center w-72 sm:w-60 lg:w-72 mx-auto border !border-white border-opacity-30 rounded-xl text-center px-4 sm:px-4 py-2 my-10">
                                        <h3 className="title text-sm font-bold !text-white">Email:</h3>
                                        <span className="data text-sm block lg:block !text-white">2019kuec1042@iiitkota.ac.in</span>
                                   </div>
                              </div>
                              <div className='text-center'>
                                   <span className='!text-white text-lg'>Send Us a mail</span>
                                   <form action="https://formsubmit.co/studentopedia94@gmail.com" method='POST' className="w-72 mx-auto">
                                        <div className="relative my-8 h-16">
                                             <span htmlFor="" className="absolute !text-white -top-4 left-5 text-sm p-1 !bg-[#141414]">Name</span>
                                             <input
                                                  type="text"
                                                  name='name'
                                                  className='!text-white top-0 left-0 w-full h-full border-2 border-solid !border-white border-opacity-30 bg-inherit text-textColor outline-0 rounded-xl p-6'
                                                  placeholder='Insert your Name'
                                                  required
                                             />
                                        </div>
                                        <div className="relative mb-8 h-16">
                                             <label htmlFor="" className="absolute !text-white -top-4 left-5 text-sm p-1 !bg-[#141414]">Email</label>
                                             <input
                                                  type="email"
                                                  name='email'
                                                  className='top-0 left-0 w-full h-full border-2 border-solid !border-white border-opacity-30 bg-inherit text-white outline-0 rounded-xl p-6'
                                                  placeholder='Insert your Email'
                                                  required
                                             />
                                        </div>
                                        <div className="relative mb-6">
                                             <label htmlFor="" className="absolute !text-white -top-4 left-5 text-sm p-1 !bg-[#141414]">Message</label>
                                             <textarea name="message" cols="30" rows="3"
                                                  className='resize-none top-0 left-0 w-full h-full border-2 border-solid !border-white border-opacity-30 bg-inherit !text-white text-textColor outline-0 rounded-xl p-6'
                                                  placeholder='Write your message'
                                                  required
                                             ></textarea>
                                        </div>
                                        <button className="px-4 py-2 rounded-xl border-2 !border-white  !text-white hover:!bg-white hover:!text-[#141414] cursor-pointer">
                                             <span>Send Message</span>
                                             {/* <i className="uil uil-location-arrow"></i> */}
                                        </button>
                                   </form>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}

export default Contact