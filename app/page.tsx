import React from 'react'
import ExploreBtn from './components/exploreBtn'
import EventCards from './components/EventCards'
import { events } from '@/lib/constants'




const page = () => {
  return (
   <section>
     <h1 className=" text-center">Event page <br /> Mutleq gelmelisen</h1>
     <p className=" text-center mt-5">Butun konferanslar bier yerde olacaktir</p>
     
     <ExploreBtn />
     <div  className="mt-20 space-y-7">

        <h3 >Events</h3>

        <ul className="events">
            {events.map((event) => (
                <li key={event.title}>
                    <EventCards {...event} />
                </li>

            ))}

        </ul>


     </div>
   </section>

  )
}

export default page