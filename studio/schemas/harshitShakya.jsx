export default {
     name: 'aboutHarshitShakya',
     type: 'document',
     title: 'About Harshit Shakya',
     fields: [
          {
               name: 'image',
               type: 'image',
               title: 'Image',
               options: {
                    hotspot: true
               }
          },
          {
               name: 'intro',
               type: 'text',
               title: 'Introduction',
               description: 'Introduction to Studentopedia'
          },
          {
               name: 'studentopediaAspect',
               type: 'text',
               title: 'Studentopedia Aspect',
               description: 'Studentopedia Aspect of Harsit Shakya.'
          },
          {
               name: 'EngineeringAspect',
               type: 'text',
               title: 'Engineering Aspect',
               description: 'Engineering Aspect of Harshit Shakya.'
          },
          {
               name: 'musicAspect',
               type: 'text',
               title: 'Music Aspect',
               description: 'Music Aspect of Harshit Shakya.'
          },
          {
               name: 'OtherAspect',
               type: 'text',
               title: 'Other Aspect',
               description: 'Other Aspect of Harshit Shakya.'
          },
          {
               name: 'Outro',
               type: 'text',
               title: 'Outro',
               description: 'Outro for About Harshit Shakya.'
          }
     ]
}