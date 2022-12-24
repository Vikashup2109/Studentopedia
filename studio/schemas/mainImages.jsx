export default {
     name: 'mainImages',
     type: 'document',
     title: 'mainImages',
     fields: [
          {
               name: 'index',
               type: 'number',
               title: 'Index',
               description: 'Index of this Image'
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