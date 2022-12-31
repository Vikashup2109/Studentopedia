import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact';
import MainSlider from './MainSlider';
import Testimonials from './Testimonials';
import sanityClient from "../Client";
import imageUrlBuilder from "@sanity/image-url";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-tiny-toast';


const Home = ({ upcomingEvents, completedEvents }) => {

     const screenWidth = window.innerWidth;
     const noOfCompletedEvents = screenWidth > 640 ? 6 : 3;

     const upcomingEventsHome = upcomingEvents.slice(0, 3).sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
     const completedEventsHome = completedEvents.slice(0, noOfCompletedEvents).sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

     // console.log(upcomingEventsHome)
     const builder = imageUrlBuilder(sanityClient);
     const urlFor = (source) => builder.image(source)

     const [modelShow, setModalShow] = useState(false);
     const [tempEvent, setTempEvent] = useState([]);
     const openModelPopUp = (TempEvent) => {
          setTempEvent(TempEvent);
          setModalShow(true);
     }

     const openToast = () => {
          toast('Subscribed Successfully', { duration: 1000, position: 'top-center' });
     }

     return (
          <>
               {/* Main Slider Section */}
               <MainSlider />

               {/* Events Section */}
               <section className='w-11/12 md:w-9/12 mx-auto py-10'>
                    <div className='flex justify-between items-center'>
                         <span className='!text-primary text-3xl font-bold'>Events</span>
                         <div className='hidden pl-4 border !border-black border-opacity-30 rounded-lg'>
                              <form>
                                   <input placeholder='Type your email' className='py-2 outline-none w-64' required />
                                   <button className='px-4 py-2 rounded-lg !bg-primary text-white !hover:bg-opPrimary cursor-pointer'>Subscribe</button>
                              </form>
                         </div>
                    </div>
                    <div className=' mx-auto py-10 space-y-16'>
                         <div>
                              <div className='flex justify-between'>
                                   <span className='!text-primary text-lg font-bold'>Upcoming Events</span>
                                   <Link to="/events">
                                        <button className='px-2 sm:px-4 py-1.5 rounded-xl border-2 !border-primary hover:!text-white hover:!bg-primary !text-black cursor-pointer'>View All <span className='hidden sm:inline-block'>Upcoming Events</span></button>
                                   </Link>
                              </div>
                              <div className='parent py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
                                   {upcomingEventsHome && upcomingEventsHome.map((event) => {
                                        return (
                                             <>
                                                  <div onClick={() => openModelPopUp(event)} className='card flex items-center gap-4 border !border-black !border-opacity-50 rounded-lg py-2 px-4 cursor-pointer hover:bg-slate-200'>
                                                       <div className='flex flex-col w-full space-y-1'>
                                                            <div className='time flex justify-between'>
                                                                 <span>{event.startDate}</span>
                                                                 <span>{event.startTime}</span>
                                                            </div>
                                                            <div>
                                                                 {event.image1 &&
                                                                      <img src={urlFor(event.image1).url()} alt="" />}
                                                                 <div className='EventName'>
                                                                      <span className='text-2xl font-bold'>{event.title}</span>
                                                                 </div>
                                                            </div>
                                                            <div className='Venue'>
                                                                 <span><span className='font-bold'>Venue: </span>{event.venue}</span>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </>
                                        )
                                   })}
                              </div>
                         </div>
                         <div>
                              <div className='flex justify-between'>
                                   <span className='!text-primary text-lg font-bold'>Past Events</span>
                                   <Link to="/events">
                                        <button className='px-2 sm:px-4 py-1.5 rounded-xl !text-black border-2 !border-primary hover:!text-white hover:!bg-primary cursor-pointer'>View All <span className='hidden sm:inline-block'>Completed Events</span></button>
                                   </Link>
                              </div>
                              <div className='parent py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
                                   {completedEventsHome && completedEventsHome.map((event) => {
                                        return (
                                             <div onClick={() => openModelPopUp(event)} className='card flex items-center  gap-4 border !border-black !border-opacity-50 rounded-lg py-2 px-4 cursor-pointer hover:bg-slate-200'>
                                                  <div className='flex flex-col w-full space-y-1'>
                                                       <div className='time flex justify-between'>
                                                            <span>{event.startDate}</span>
                                                            <span>{event.startTime}</span>
                                                       </div>
                                                       <div>
                                                            {event.image1 &&
                                                                 <img src={urlFor(event.image1).url()} alt="" />}
                                                            <div className='EventName'>
                                                                 <span className='text-2xl font-bold'>{event.title}</span>
                                                            </div>
                                                       </div>
                                                       <div className='Venue'>
                                                            <span><span className='font-bold'>Venue: </span>{event.venue}</span>
                                                       </div>
                                                  </div>
                                             </div>
                                        )
                                   })}
                              </div>
                         </div>
                    </div>
               </section>

               {/* Model to open on Clicking Event */}
               {modelShow && <Modal
                    show={modelShow}
                    onHide={() => setModalShow(false)}
                    // {...props}
                    size="xl"
                    centered
                    scrollable
               // className=''
               >
                    <Modal.Header>
                         <Modal.Title className='w-3/4'>
                              <div className='font-bold text-lg lg:text-2xl'>{tempEvent.title}</div>
                         </Modal.Title>
                         <div className=' w-4/12 lg:w-3/12 xl:w-2/12 flex flex-col text-xs md:text-sm lg:text-lg'>
                              <span className='flex justify-around font-bold'><span>Date: </span><span>{tempEvent.startDate}</span> </span>
                              <span className='flex justify-around font-bold'><span>Time: </span><span>{tempEvent.startTime}</span> </span>
                         </div>
                    </Modal.Header>
                    <Modal.Body>
                         <div className='flex flex-row gap-1 border-2 !border-primary px-3 py-2 rounded-xl tracking-wide text-lg mb-4'>
                              <span className='font-bold text-justify'>Event Head: {tempEvent.eventHead} </span>
                              {/* <span> {tempEvent.eventHead}{tempEvent.eventHead}{tempEvent.eventHead}{tempEvent.eventHead}</span> */}
                         </div>
                         <div className='grid grid-cols-2 md:grid-cols-3 gap-0 md:px-6'>
                              {tempEvent.image1 &&
                                   <img src={urlFor(tempEvent.image1).url()} alt="" />
                              }
                              {tempEvent.image2 &&
                                   <img src={urlFor(tempEvent.image2).url()} alt="" />
                              }
                              {tempEvent.image3 &&
                                   <img src={urlFor(tempEvent.image3).url()} alt="" />
                              }
                              {tempEvent.image4 &&
                                   <img src={urlFor(tempEvent.image4).url()} alt="" />
                              }
                              {tempEvent.image5 &&
                                   <img src={urlFor(tempEvent.image5).url()} alt="" />
                              }
                              {tempEvent.image6 &&
                                   <img src={urlFor(tempEvent.image6).url()} alt="" />
                              }
                              {tempEvent.image7 &&
                                   <img src={urlFor(tempEvent.image7).url()} alt="" />
                              }
                              {tempEvent.image8 &&
                                   <img src={urlFor(tempEvent.image8).url()} alt="" />
                              }
                              {tempEvent.image9 &&
                                   <img src={urlFor(tempEvent.image9).url()} alt="" />
                              }
                         </div>
                         <p className='py-4 text-justify lg:px-10'>
                              {tempEvent.description}
                         </p>
                         <span className='font-bold text-lg'>Venue: <span>{tempEvent.venue}</span></span>
                    </Modal.Body>
                    <Modal.Footer className='flex justify-between'>
                         <div className='flex flex-col sm:flex-row gap-1 border-2 !border-primary px-3 py-2 rounded-xl tracking-wide text-lg bg-gray-700 text-white'>
                              <span className=''>Chief Guest: </span>
                              <span> {tempEvent.chiefGuest}</span>
                         </div>
                         <Button className='border-2 !bg-white !border-primary !text-black hover:!bg-primary hover:!text-white' onClick={() => setModalShow(false)}>Close</Button>
                    </Modal.Footer>
               </Modal>
               }

               {/* Testimonial Section */}
               <Testimonials />


               {/* Contact Section */}
               <Contact />
          </>
     )
}

// function MyVerticallyCenteredModal(props) {
//      return (

//      );
// }

export default Home