import React, { useState, useEffect } from 'react'
import sanityClient from "../Client";
import imageUrlBuilder from "@sanity/image-url";


const HarshitShakya = () => {
     const [aboutHarshitData, setAboutHarshitData] = useState([]);
     useEffect(() => {
          const fetchData = async () => {
               const data = await sanityClient.fetch(`*[_type == "aboutHarshitShakya"]{intro, 
                    studentopediaAspect, studentopediaAspectImage{asset->{url}} ,  EngineeringAspect, EngineeringAspectImage{asset->{url}}, 
                    musicAspect, musicAspectImage{asset->{url}}, OtherAspect, OtherAspectImage{asset->{url}}, 
                    Outro, image{asset->{url}}}`)
               // console.log(data)
               setAboutHarshitData(data)
          }
          fetchData()
          // console.log(testimonialData)
     }, []);
     const builder = imageUrlBuilder(sanityClient);
     const urlFor = (source) => builder.image(source)
     return (
          <>
               <section className='w-11/12 sm:w-10/12 xl:w-8/12 mx-auto text-justify'>
                    <div className='w-full text-center py-16'>
                         <span className='text-5xl text-center'>Co-Founder's Note.</span>
                    </div>
                    {aboutHarshitData && aboutHarshitData.map((data) => {
                         return (
                              <>
                                   <div className='flex flex-col lg:flex-row gap-6'>
                                        <div className='text-center mx-auto lg:w-4/12'>
                                             {data.image &&
                                                  <div className='mb-10'>
                                                       <img src={urlFor(data.image).url()} alt='Harshit Shakya' className='' />
                                                  </div>
                                             }
                                        </div>
                                        <div className='lg:w-8/12'>
                                             <p className='text-lg'>{data.intro}</p>
                                        </div>
                                   </div>
                                   <div className='mt-10 lg:mt-0'>
                                        <span className='text-3xl font-mono'>About me.</span>
                                   </div>
                                   <div>
                                        {data.studentopediaAspectImage && <div className='border-2 !border-primary my-6 p-4 !border-opacity-30 rounded-lg sm:border-none'>
                                             <div className='flex flex-col sm:flex-row sm:!gap-10 gap-1'>
                                                  <img src={urlFor(data.studentopediaAspectImage).url()} alt="" className='sm:w-1/2 w-full' />
                                                  <div className='mx-auto'>
                                                       <span className='text-3xl font-bold font-serif'>"An Enterpreneuer."</span>
                                                       <p className='text-lg pt-2'>{data.studentopediaAspect}</p>
                                                  </div>
                                             </div>
                                        </div>
                                        }
                                        {data.EngineeringAspectImage && <div className='border-2 !border-primary my-6 p-4 !border-opacity-30 rounded-lg sm:border-none'>
                                             <div className='flex flex-col sm:flex-row-reverse sm:!gap-10 gap-1'>
                                                  <img src={urlFor(data.EngineeringAspectImage).url()} alt="" className='sm:w-1/2 w-full' />
                                                  <div className='mx-auto'>
                                                       <span className='text-3xl font-bold font-serif'>"An Engineer."</span>
                                                       <p className='text-lg pt-2'>{data.EngineeringAspect}</p>
                                                  </div>
                                             </div>
                                        </div>
                                        }
                                        {data.musicAspectImage && <div className='border-2 !border-primary my-6 p-4 !border-opacity-30 rounded-lg sm:border-none'>
                                             <div className='flex flex-col sm:flex-row sm:!gap-10 gap-1'>
                                                  <img src={urlFor(data.musicAspectImage).url()} alt="" className='sm:w-1/2 w-full' />
                                                  <div className='mx-auto'>
                                                       <span className='text-3xl font-bold font-serif'>"A Music Lover."</span>
                                                       <p className='text-lg pt-2'>{data.musicAspect}</p>
                                                  </div>
                                             </div>
                                        </div>
                                        }
                                        {data.OtherAspectImage && <div className='border-2 !border-primary my-6 p-4 !border-opacity-30 rounded-lg sm:border-none'>
                                             <div className='flex flex-col sm:flex-row-reverse sm:!gap-10 gap-1'>
                                                  <img src={urlFor(data.OtherAspectImage).url()} alt="" className='sm:w-1/2 w-full' />
                                                  <div className='mx-auto'>
                                                       <span className='text-3xl font-bold font-serif'>"Another Me."</span>
                                                       <p className='text-lg pt-2'>{data.OtherAspect}</p>
                                                  </div>
                                             </div>
                                        </div>
                                        }
                                        <div>
                                             <p className='text-lg py-2'>{data.OtherAspect}</p>
                                        </div>
                                        <div>
                                             <p className='text-lg py-2'>{data.Outro}</p>
                                        </div>
                                   </div>
                                   <div className='flex flex-col text-right py-16'>
                                        <span className='text-3xl font-mono'> - Harshit Shakya</span>
                                        <span className='text-xl font mono'>Co-Founder, Studentopedia.</span>
                                   </div>
                              </>
                         )
                    })}
               </section>
          </>
     )
}
export default HarshitShakya