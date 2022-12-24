export default {
     name: 'testimonials',
     type: 'document',
     title: 'Testimonials',
     fields: [
          {
               name: 'title',
               type: 'string',
               title: 'Title',
               description: 'Name of the Testimonial Giver'
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