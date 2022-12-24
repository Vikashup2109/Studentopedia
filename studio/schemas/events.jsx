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
               name: 'image',
               type: 'image',
               title: 'Image',
               options: {
                    hotspot: true
               }
          },
          {
               name: 'slug',
               title: 'slug',
               type: 'slug',
               options: {
                    source: 'title',
                    maxLength: 90
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
               title: 'Is this Event Completed',
               description: 'Is completed or not'
          },
     ]
}