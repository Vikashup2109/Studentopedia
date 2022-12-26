import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import sanityClient from "../Client";
import imageUrlBuilder from "@sanity/image-url";

const Events = ({ upcomingEvents, completedEvents }) => {
     const finalupcomingEvents = upcomingEvents.sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
     const finalcompletedEvents = completedEvents.sort((a, b) => new Date(a.startDate) - new Date(b.startDate))

     const builder = imageUrlBuilder(sanityClient);
     const urlFor = (source) => builder.image(source)


     const [modelShow, setModalShow] = useState(false);
     const [tempEvent, setTempEvent] = useState([]);
     const openModelPopUp = (TempEvent) => {
          setTempEvent(TempEvent);
          setModalShow(true);
     }
     return (
          <>
               {modelShow && <Modal
                    show={modelShow}
                    onHide={() => setModalShow(false)}
                    // {...props}
                    size="xl"
                    centered

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
                         <img src={urlFor(tempEvent.image).url()} alt="" className='w-full md:w-2/3 justify-center text-center mx-auto' />
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

               <section className='w-9/12 mx-auto py-10'>
                    <div className='flex justify-between items-center'>
                         <span className='!text-primary text-2xl font-bold'>Events</span>
                    </div>
                    <div className=' mx-auto py-10 space-y-10'>
                         <div>
                              <span className='!text-primary text-lg font-bold'>Upcoming Events</span>
                              <div className='parent py-4 grid grid-cols-3 gap-6 mx-auto'>
                                   {finalupcomingEvents && finalupcomingEvents.map((event) => {
                                        return (
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
                                        )
                                   })}
                              </div>
                         </div>
                         <div>
                              <span className='!text-primary text-lg font-bold'>Past Events</span>
                              <div className='parent py-6 grid grid-cols-3 gap-6 mx-auto'>
                                   {finalcompletedEvents && finalcompletedEvents.map((event) => {
                                        return (
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
                                        )
                                   })}
                              </div>
                         </div>
                         {/* Cards to show events */}
                    </div>
               </section>
          </>
     )
}

export default Events