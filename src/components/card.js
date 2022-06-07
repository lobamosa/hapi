import axios from 'axios';
import { Post } from '../services/api';
import React, { useState, useEffect } from 'react';

export default function Card() {
    const [events, setEvents] = useState("");
    const sendParticipation = (url) => {
        Post(url, {accepted: true})
    }
    useEffect(() => {
        fetch("http://localhost:3000/events")
        .then(res => res.json())
        .then((results) => {
           setEvents(results)
           console.log(events)
        })
      }, []);
    return(
        <div>
        {events && (
          Array.from(events).map((event) =>(
              <div className="text-white" key={event.id}>
                  <h1> {event.title} </h1>
                  <p>{event.place}</p>
                  <button >y participer</button>
              </div>
          ))
        )}
    </div>
    )
}
