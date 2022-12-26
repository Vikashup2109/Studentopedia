import React, { useState, useEffect } from 'react'
import sanityClient from "../Client";

const AboutUs = () => {
     const [aboutUsData, setAboutUsData] = useState([]);
     useEffect(() => {
          const fetchData = async () => {
               const data = await sanityClient.fetch(`*[_type == "aboutUs"]{intro, pastWork1, pastWork2,pastWork3, pastWork4, pastWork5, inspiration, inspiring}`)
               // console.log(data)
               setAboutUsData(data)
          }
          fetchData()
          // console.log(testimonialData)
     }, []);
     return (
          <>

               <section className='w-8/12 mx-auto text-justify'>
                    <div className='w-full text-center py-16'>
                         <span className='text-5xl text-center'>Let's Know the Studentopedia.</span>
                    </div>
                    {aboutUsData && aboutUsData.map((data) => {
                         return (
                              <>
                                   <div>
                                        <p className='text-lg'>{data.intro}</p>
                                   </div>
                                   <br />
                                   <span className='text-3xl font-mono'>Our Past Works:</span>
                                   <br />
                                   <div>
                                        <p className='text-lg py-2'>{data.pastWork1}</p>
                                        <p className='text-lg py-2'>{data.pastWork2}</p>
                                        <p className='text-lg py-2'>{data.pastWork3}</p>
                                        <p className='text-lg py-2'>{data.pastWork4}</p>
                                        <p className='text-lg py-2'>{data.pastWork5}</p>
                                   </div>
                                   <br />
                                   <span className='text-3xl font-mono'>Our Inspiration.</span>
                                   <br />
                                   <div>
                                        <p className='text-lg py-6'>{data.inspiration}</p>
                                   </div>
                                   <br />
                                   <span className='text-3xl font-mono'>Inspiring Others.</span>
                                   <br />
                                   <div className='mb-10'>
                                        <p className='text-lg py-6'>{data.inspiring}</p>
                                   </div>
                              </>
                         )
                    })
                    }

               </section>
          </>
     )
}

export default AboutUs