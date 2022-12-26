export default {
     name: 'testimonials',
     type: 'document',
     title: 'Testimonials',
     fields: [
          {
               name: 'name',
               type: 'string',
               title: 'Name',
               description: 'Name of the Testimonial Giver'
          },
          {
               name: 'designation',
               type: 'string',
               title: 'Designation',
               description: 'Designation of the Testimonial Giver'
          },
          {
               name: 'organization',
               type: 'string',
               title: 'Organization',
               description: 'Organization of the Testimonial Giver'
          },
          {
               name: 'testimonialText',
               type: 'string',
               title: 'Testimonial Text',
               description: 'Testimonial Text'
          },
          {
               title: 'image',
               name: 'image',
               type: 'image',
               options: {
                    hotspot: true
               }
          }
     ]
}