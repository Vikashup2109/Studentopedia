import React, { useState, useEffect } from 'react'
import sanityClient from "../Client";
import imageUrlBuilder from "@sanity/image-url";
import { Carousel } from 'react-bootstrap';

const MainSlider = () => {
     const [mainImages, setMainImages] = useState([]);
     useEffect(() => {
          const fetchData = async () => {
               const data = await sanityClient.fetch(`*[_type == "mainImages"]{index, image{asset->{url}}}`)
               // console.log(data)
               setMainImages(data)
          }
          fetchData()
     }, []);
     const builder = imageUrlBuilder(sanityClient);
     const urlFor = (source) => builder.image(source)
     return (
          <>
               <section className='my-auto h-screen overflow-hidden'>
                    <Carousel interval={3000} pause='hover' variant='dark' className='my-auto h-screen'>
                         {mainImages && mainImages.map((image) => {
                              return (
                                   <Carousel.Item>
                                        <>
                                             <img src={urlFor(image.image).url()} alt="Hello" className="w-full mx-auto" />
                                        </>
                                   </Carousel.Item>
                              )
                         })}
                    </Carousel>
               </section>
          </>
     )
}

export default MainSlider