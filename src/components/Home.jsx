import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact';
import MainSlider from './MainSlider';
import Testimonials from './Testimonials';
import sanityClient from "../Client";
import imageUrlBuilder from "@sanity/image-url";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Home = ({ upcomingEvents, completedEvents, formData }) => {
     const upcomingEventsHome = upcomingEvents.slice(0, 3).sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
     const completedEventsHome = completedEvents.slice(0, 6).sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

     // console.log(upcomingEventsHome)
     const builder = imageUrlBuilder(sanityClient);
     const urlFor = (source) => builder.image(source)

     const [modelShow, setModalShow] = useState(false);
     const [tempEvent, setTempEvent] = useState([]);
     const openModelPopUp = (TempEvent) => {
          setTempEvent(TempEvent);
          setModalShow(true);
     }
     const [subscriberName, setSubscriberName] = useState([])

     const handleEmailChange = (e) => {
          setSubscriberName(e.target.value);
     }
     const onSubmit = (e) => {
          // subscribersList.push(subscriberName)
          e.preventDefault();
          console.log(subscriberName);
          formData(subscriberName);
     }
     return (
          <>
               {/* Main Slider Section */}
               <MainSlider />

               {/* Events Section */}
               <section className='w-9/12 mx-auto py-10'>
                    <div className='flex justify-between items-center'>
                         <span className='!text-primary text-3xl font-bold'>Events</span>
                         <div className='pl-4 border !border-black border-opacity-30 rounded-lg'>
                              <form onSubmit={onSubmit}>
                                   <input type="text" name="subscribe" placeholder='Type your email' className='py-2 outline-none w-64' onChange={handleEmailChange} required />
                                   <button className='px-4 py-2 rounded-lg !bg-primary text-white !hover:bg-opPrimary cursor-pointer'>Subscribe</button>
                              </form>
                         </div>
                    </div>
                    <div className=' mx-auto py-10 space-y-16'>
                         <div>
                              <div className='flex justify-between'>
                                   <span className='!text-primary text-lg font-bold'>Upcoming Events</span>
                                   <Link to="/events">
                                        <button className='px-4 py-1.5 rounded-xl border-2 !border-primary hover:!text-white hover:!bg-primary !text-black cursor-pointer'>View All Upcoming Events</button>
                                   </Link>
                              </div>
                              <div className='parent py-6 grid grid-cols-3 gap-6 mx-auto'>
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
                                                                 <img src={urlFor(event.image).url()} alt="" />
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
                                        <button className='px-4 py-1.5 rounded-xl !text-black border-2 !border-primary hover:!text-white hover:!bg-primary cursor-pointer'>View All Completed Events</button>
                                   </Link>
                              </div>
                              <div className='parent py-6 grid grid-cols-3 gap-6 mx-auto'>
                                   {completedEventsHome && completedEventsHome.map((event) => {
                                        return (
                                             <div onClick={() => openModelPopUp(event)} className='card flex items-center  gap-4 border !border-black !border-opacity-50 rounded-lg py-2 px-4 cursor-pointer hover:bg-slate-200'>
                                                  <div className='flex flex-col w-full space-y-1'>
                                                       <div className='time flex justify-between'>
                                                            <span>{event.startDate}</span>
                                                            <span>{event.startTime}</span>
                                                       </div>
                                                       <div>
                                                            <img src={urlFor(event.image).url()} alt="" />
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
               >
                    <Modal.Header>
                         <Modal.Title>
                              {tempEvent.title}
                         </Modal.Title>
                         <div className='text-lg'>
                              Category: {tempEvent.category}
                         </div>
                    </Modal.Header>
                    <Modal.Body>
                         <div className='flex justify-between pb-2'>
                              <div className='bg-teal-700 px-3 py-2 rounded-lg text-white font-mono'><span className='text-lg'>Chief Guest: </span> <span className='text-2xl'>{tempEvent.chiefGuest}</span></div>
                              <div className='bg-emerald-900 px-3 py-2 rounded-lg text-white font-mono'><span className='text-lg'>Event Head: </span> <span className='text-2xl'>{tempEvent.eventHead}</span></div>
                         </div>
                         <div>
                              <img src={urlFor(tempEvent.image).url()} alt="" className='w-2/3 justify-center text-center mx-auto' />
                         </div>
                         <p className='py-4 text-justify px-10'>
                              {tempEvent.description}
                         </p>
                         <span className='font-bold text-lg'>Venue: <span>{tempEvent.venue}</span></span>
                    </Modal.Body>
                    <Modal.Footer className='flex justify-between'>
                         <div className='flex gap-6'>
                              <span className='font-bold'>Date: {tempEvent.startDate}</span>
                              <span className='font-bold'>Time: {tempEvent.startTime}</span>
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