import React from 'react'

const Donations = () => {
     return (
          <>
               <section className='pt-8 md:pt-20 lg:pt-20 pb-8 md:pb-12 lg:pb-20 bg-bodyColor dark:bg-bodyColorDarkMode'>
                    <div className="px-4 max-w-5xl mx-auto space-y-6">
                         <h2 className="text-6xl text-titleColor text-center pb-2 text-titleColor dark:text-titleColorDarkMode">Donation</h2>
                         <span className=" text-center block text-lg mb-12e">Thanks for showing Interest in Studentopedia.</span>

                         <div className="mx-auto lg:p-6 py-6">
                              <div className="mx-auto w-fit md:w-1/2 border border-solid border-black dark:border-white border-opacity-10 rounded-xl bg-bodyColor dark:bg-bodyColorDarkMode px-4 sm:px-12 py-8 text-titleColor dark:text-titleColorDarkMode">
                                   <div className='flex items-center gap-6'>
                                        <h3 className="text-red-500 mb-4 font-medium text-3xl mx-auto">Coming Soon </h3>
                                   </div>
                                   <div className='flex items-center pb-8'>
                                        <p className="mx-auto ">This Section is Under Development. We will be there soon.</p>
                                   </div>
                                   <div className='flex items-center pb-8'>
                                        <p className="text-3xl text-center mx-auto">Sorry for the Inconvenience.</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}

export default Donations