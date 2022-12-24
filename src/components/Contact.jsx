import React, { useRef } from 'react'
// import emailjs from '@emailjs/browser';

const Contact = () => {

     // const formRef = useRef(null);
     // const sendEmail = (e) => {
     //      e.preventDefault();
     //      emailjs.sendForm('contact_form_response', 'template_ak86u7c', formRef.current, 'ROW7aDHA1EMB4xldZ')
     //           .then((result) => {
     //                console.log(result.text);
     //                console.log("Response Submitted")
     //                e.target.reset()
     //           }, (error) => {
     //                console.log(error.text);
     //           });
     // };
     return (
          <>
               <section className='w-full mx-auto pt-6 !bg-[#141414]'>
                    <div className='w-9/12 mx-auto'>
                         <h1 className=' !text-white text-3xl font-bold'>Get in Touch</h1>
                         <div className='w-9/12 mx-auto pt-8 pb-16 flex justify-between'>
                              <div className='text-center'>
                                   <span className='!text-white text-lg'>Contact Us</span>
                                   <div className="w-56 xsm:w-60 sm:w-80 md:w-36 lg:w-72 mx-auto border border-white border-opacity-30 rounded-xl text-center px-4 sm:px-4 pb-4 my-10">
                                        <h3 className="title text-small font-bold !text-white mt-3">Whatsapp</h3>
                                        <span className="data text-small block sm:hidden lg:block mb-3 !text-white">+91 6387768007</span>
                                        <a href={`https://api.whatsapp.com/send?phone=916387768007&text=Hey`}
                                             className=" !text-white text-small inline-flex items-center justify center gap-1"
                                             target="_blank" rel="noreferrer"
                                        > Write Me
                                             <i className="uil uil-arrow-right text-normal"></i>
                                        </a>
                                   </div>
                                   <div className="w-56 xsm:w-60 sm:w-80 md:w-36 lg:w-72 mx-auto border !border-white border-opacity-30 rounded-xl text-center px-4 sm:px-4 pb-4 my-10">
                                        <h3 className="title text-small font-bold !text-white mt-3">Email</h3>
                                        <span className="data text-small block sm:hidden lg:block mb-3 !text-white">2019kuec1042@iiitkota.ac.in</span>
                                        <a href="mailto:2019kuec1042@iiitkota.ac.in"
                                             className=" !text-white text-small inline-flex items-center justify center gap-1"
                                             target="_blank" rel="noreferrer"
                                        > Write Me
                                             <i className="uil uil-arrow-right text-normal"></i>
                                        </a>
                                   </div>
                                   <div className="w-56 xsm:w-60 sm:w-80 md:w-36 lg:w-72 mx-auto border !border-white border-opacity-30 rounded-xl text-center px-4 sm:px-4 pb-4 my-10">
                                        <h3 className="title text-small font-bold !text-white">Email</h3>
                                        <span className="data text-small block sm:hidden lg:block mb-3 !text-white">2019kuec1042@iiitkota.ac.in</span>
                                        <a href="mailto:2019kuec1042@iiitkota.ac.in"
                                             className=" !text-white text-small inline-flex items-center justify center gap-1"
                                             target="_blank" rel="noreferrer"
                                        > Write Me
                                             <i className="uil uil-arrow-right text-normal"></i>
                                        </a>
                                   </div>
                              </div>
                              <div>
                                   <span className='!text-white text-lg'>Send Us a mail</span>
                                   <form action="https://formsubmit.co/studentopedia94@gmail.com" method='POST' className="w-60 xsm:w-80 md:w-72 mx-auto">
                                        <div className="relative my-8 h-16">
                                             <label htmlFor="" className="absolute !text-white -top-4 left-5 text-smaller p-1 !bg-[#141414]">Name</label>
                                             <input
                                                  type="text"
                                                  name='name'
                                                  className='!text-white top-0 left-0 w-full h-full border-2 border-solid !border-white border-opacity-30 bg-inherit text-textColor outline-0 rounded-xl p-6'
                                                  placeholder='Insert your Name'
                                                  required
                                             />
                                        </div>
                                        <div className="relative mb-8 h-16">
                                             <label htmlFor="" className="absolute !text-white -top-4 left-5 text-smaller p-1 !bg-[#141414]">Email</label>
                                             <input
                                                  type="email"
                                                  name='email'
                                                  className='top-0 left-0 w-full h-full border-2 border-solid !border-white border-opacity-30 bg-inherit text-white outline-0 rounded-xl p-6'
                                                  placeholder='Insert your Email'
                                                  required
                                             />
                                        </div>
                                        <div className="relative mb-6">
                                             <label htmlFor="" className="absolute !text-white -top-4 left-5 text-smaller p-1 !bg-[#141414]">Message</label>
                                             <textarea name="message" cols="30" rows="8"
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