export default {
     name: 'events',
     type: 'document',
     title: 'Events',
     fields: [
          {
               name: 'category',
               type: 'string',
               title: 'Category',
               description: 'Category of this event'
          },
          {
               name: 'title',
               type: 'string',
               title: 'Title',
               description: 'Name of the event'
          },
          {
               name: 'image1',
               type: 'image',
               title: 'Image1',
               options: {
                    hotspot: true
               }
          },
          {
               name: 'image2',
               type: 'image',
               title: 'Image2',
               options: {
                    hotspot: true
               }
          },
          {
               name: 'image3',
               type: 'image',
               title: 'Image3',
               options: {
                    hotspot: true
               }
          },
          {
               name: 'image4',
               type: 'image',
               title: 'Image4',
               options: {
                    hotspot: true
               }
          },
          {
               name: 'image5',
               type: 'image',
               title: 'Image5',
               options: {
                    hotspot: true
               }
          },
          {
               name: 'image6',
               type: 'image',
               title: 'Image6',
               options: {
                    hotspot: true
               }
          },
          {
               name: 'image7',
               type: 'image',
               title: 'Image7',
               options: {
                    hotspot: true
               }
          },
          {
               name: 'image8',
               type: 'image',
               title: 'Image8',
               options: {
                    hotspot: true
               }
          },
          {
               name: 'image9',
               type: 'image',
               title: 'Image9',
               options: {
                    hotspot: true
               }
          },
          {
               name: 'description',
               type: 'text',
               title: 'Description',
               description: 'Description of the event'
          },
          {
               name: 'startDate',
               type: 'date',
               title: 'Start Date',
               options: {
                    dateFormat: 'DD-MM-YYYY',
                    calendarTodayLabel: 'Today'
               },
               description: 'Starting Date of the event'
          },
          {
               name: 'startTime',
               type: 'string',
               title: 'Start Time',

               description: 'Ending Date of the event'
          },
          {
               name: 'eventHead',
               type: 'string',
               title: 'Event Head',
               description: 'Name of the person who is heading the event'
          },
          {
               name: 'chiefGuest',
               type: 'string',
               title: 'Chief Guest',
               description: 'Name of the chief guest'
          },
          {
               name: 'venue',
               type: 'string',
               title: 'Venue',
               description: 'Venue of the event'
          },
          {
               name: 'isCompleted',
               type: 'boolean',
               default: false,
               title: 'Is this Event Completed',
               description: 'Is completed or not'
          },
     ]
}