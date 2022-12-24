import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import Events from './components/Events'
// import SubscriberList from './components/SubscriberList'
import sanityClient from "./Client";
import Donations from './components/Donations'


function App() {
     const [events, setEvents] = useState([]);
     const [formData, setFormData] = useState('');
     const [upcomingEvents, setUpcomingEvents] = useState([]);
     const [completedEvents, setCompletedEvents] = useState([]);
     useEffect(() => {
          const fetchData = async () => {
               const data = await sanityClient.fetch(`*[_type == "events"]{title,category,description,slug,startDate, startTime, eventHead, chiefGuest, venue, isCompleted, image{asset->{url}}}`)
               setUpcomingEvents(data.filter((event) => event.isCompleted === false))
               setCompletedEvents(data.filter((event) => event.isCompleted === true))
          }
          fetchData()
     }, []);


     return (
          <>
               <Header />
               {/* <SubscriberList data={formData} /> */}
               {/* <Home /> */}
               <Routes>
                    <Route exact path='/' element={<Home upcomingEvents={upcomingEvents} completedEvents={completedEvents} formData={(list) => setFormData(list)} />} />
                    <Route exact path="/events" element={<Events upcomingEvents={upcomingEvents} completedEvents={completedEvents} />} />
                    <Route exact path="/donation" element={<Donations />} />
                    {/* <Route exact path="/subscriber" element={} /> */}
               </Routes>

               <Footer />
          </>
     )
}

export default App
