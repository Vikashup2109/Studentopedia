import sanityClient from "../Client";
import { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { Carousel } from 'react-bootstrap';


const testimonials = () => {
     const [testimonialData, setTestimonialData] = useState([]);
     useEffect(() => {
          const fetchData = async () => {
               const data = await sanityClient.fetch(`*[_type == "testimonials"]{title, image{asset->{url}}}`)
               // console.log(data)
               setTestimonialData(data)
          }
          fetchData()
          // console.log(testimonialData)
     }, []);
     // useEffect(() => { console.log(testimonialData) }, [testimonialData]);

     const builder = imageUrlBuilder(sanityClient);
     const urlFor = (source) => builder.image(source)

     return (
          <>
               <section className=' w-full'>
                    <div className='w-9/12 mx-auto py-10'>
                         <div className='flex justify-between items-center'>
                              <span className='!text-primary text-3xl font-bold'>Testimonials</span>
                         </div>
                         <div className=' mx-auto py-2 space-y-16'>
                              <Carousel interval={3000} pause='hover' variant="dark">
                                   {testimonialData && testimonialData.map((testimonial) => {
                                        return (
                                             <Carousel.Item>
                                                  <>
                                                       <div className="p-16">
                                                            <img src={urlFor(testimonial.image).url()} alt="Hello" className="w-1/2 mx-auto" />
                                                       </div>
                                                  </>
                                             </Carousel.Item>
                                        )
                                   })}
                              </Carousel>
                         </div>
                    </div>
               </section>
          </>
     )
}

export default testimonials