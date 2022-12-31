import React, { useState, useEffect } from 'react'
import sanityClient from "../Client";
import imageUrlBuilder from "@sanity/image-url";


const AboutUs = () => {
     const [aboutUsData, setAboutUsData] = useState([]);
     useEffect(() => {
          const fetchData = async () => {
               const data = await sanityClient.fetch(`*[_type == "aboutUs"]{index, intro, pastWork1, pastWork1Image{asset->{url}},
                                                       pastWork2, pastWork2Image{asset->{url}}, pastWork3, pastWork3Image{asset->{url}},
                                                       pastWork4, pastWork4Image{asset->{url}}, pastWork5, pastWork5Image{asset->{url}},
                                                       pastWork6, pastWork6Image{asset->{url}}, pastWork7, pastWork7Image{asset->{url}},
                                                       pastWork8, pastWork8Image{asset->{url}}, pastWork9, pastWork9Image{asset->{url}},
                                                       pastWork10, pastWork10Image{asset->{url}}, inspiration, inspiring}`)
               // console.log(data)
               setAboutUsData(data)
          }
          fetchData()
          // console.log(testimonialData)
     }, []);

     const builder = imageUrlBuilder(sanityClient);
     const urlFor = (source) => builder.image(source)

     return (
          <>

               <section className='w-11/12 sm:w-10/12 lg:w-8/12 mx-auto text-justify'>
                    <div className='w-full text-center py-16'>
                         <span className='text-4xl sm:text-5xl text-center'>Let's Know the Studentopedia.</span>
                    </div>
                    {aboutUsData && aboutUsData.map((data, index) => {
                         return (
                              <>
                                   <div key={index}>
                                        <div>
                                             <p className='text-lg'>{data.intro}</p>
                                        </div>
                                        <br />
                                        <span className='text-3xl font-mono'>Our Past Works:</span>
                                        <br />
                                        <div>
                                             {data.pastWork1Image && <div className='border-2 !border-primary my-6 p-4 !border-opacity-30 rounded-lg'>
                                                  <div className='flex flex-col sm:flex-row sm:!gap-10 gap-1'>
                                                       <img src={urlFor(data.pastWork1Image).url()} alt="" className='sm:w-1/2 w-full' />
                                                       <p className='text-lg pt-1'>{data.pastWork1}</p>
                                                  </div>
                                             </div>
                                             }
                                             {data.pastWork2Image && <div className='border-2 !border-primary my-6 p-4 !border-opacity-30 rounded-lg'>
                                                  <div className='flex flex-col sm:flex-row-reverse sm:!gap-10 gap-1 my-6'>
                                                       <img src={urlFor(data.pastWork2Image).url()} alt="" className='sm:w-1/2 w-full' />
                                                       <p className='text-lg pt-1'>{data.pastWork2}</p>
                                                  </div>
                                             </div>
                                             }
                                             {data.pastWork3Image && <div className='border-2 !border-primary my-6 p-4 !border-opacity-30 rounded-lg'>
                                                  <div className='flex flex-col sm:flex-row sm:!gap-10 gap-1 my-6'>
                                                       <img src={urlFor(data.pastWork3Image).url()} alt="" className='sm:w-1/2 w-full' />
                                                       <p className='text-lg pt-1'>{data.pastWork3}</p>
                                                  </div>
                                             </div>
                                             }
                                             {data.pastWork4Image && <div className='border-2 !border-primary my-6 p-4 !border-opacity-30 rounded-lg'>
                                                  <div className='flex flex-col sm:flex-row-reverse sm:!gap-10 gap-1 my-6'>
                                                       <img src={urlFor(data.pastWork4Image).url()} alt="" className='sm:w-1/2 w-full' />
                                                       <p className='text-lg pt-1'>{data.pastWork4}</p>
                                                  </div>
                                             </div>
                                             }
                                             {data.pastWork5Image && <div className='border-2 !border-primary my-6 p-4 !border-opacity-30 rounded-lg'>
                                                  <div className='flex flex-col sm:flex-row sm:!gap-10 gap-1 my-6'>
                                                       <img src={urlFor(data.pastWork5Image).url()} alt="" className='sm:w-1/2 w-full' />
                                                       <p className='text-lg pt-1'>{data.pastWork5}</p>
                                                  </div>
                                             </div>
                                             }
                                             {data.pastWork6Image && <div className='border-2 !border-primary my-6 p-4 !border-opacity-30 rounded-lg'>
                                                  <div className='flex flex-col sm:flex-row-reverse sm:!gap-10 gap-1 my-6'>
                                                       <img src={urlFor(data.pastWork6Image).url()} alt="" className='sm:w-1/2 w-full' />
                                                       <p className='text-lg pt-1'>{data.pastWork6}</p>
                                                  </div>
                                             </div>
                                             }
                                             {data.pastWork7Image && <div className='border-2 !border-primary my-6 p-4 !border-opacity-30 rounded-lg'>
                                                  <div className='flex flex-col sm:flex-row sm:!gap-10 gap-1 my-6'>
                                                       <img src={urlFor(data.pastWork7Image).url()} alt="" className='sm:w-1/2 w-full' />
                                                       <p className='text-lg pt-1'>{data.pastWork7}</p>
                                                  </div>
                                             </div>
                                             }
                                             {data.pastWork8Image && <div className='border-2 !border-primary my-6 p-4 !border-opacity-30 rounded-lg'>
                                                  <div className='flex flex-col sm:flex-row-reverse sm:!gap-10 gap-1 my-6'>
                                                       <img src={urlFor(data.pastWork8Image).url()} alt="" className='sm:w-1/2 w-full' />
                                                       <p className='text-lg pt-1'>{data.pastWork8}</p>
                                                  </div>
                                             </div>
                                             }
                                             {data.pastWork9Image && <div className='border-2 !border-primary my-6 p-4 !border-opacity-30 rounded-lg'>
                                                  <div className='flex flex-col sm:flex-row sm:!gap-10 gap-1 my-6'>
                                                       <img src={urlFor(data.pastWork9Image).url()} alt="" className='sm:w-1/2 w-full' />
                                                       <p className='text-lg pt-1'>{data.pastWork9}</p>
                                                  </div>
                                             </div>
                                             }
                                             {data.pastWork10Image && <div className='border-2 !border-primary my-6 p-4 !border-opacity-30 rounded-lg'>
                                                  && <div className='flex flex-col sm:flex-row-reverse sm:!gap-10 gap-1 my-6'>
                                                       <img src={urlFor(data.pastWork10Image).url()} alt="" className='sm:w-1/2 w-full' />
                                                       <p className='text-lg pt-1'>{data.pastWork10}</p>
                                                  </div>
                                             </div>
                                             }
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