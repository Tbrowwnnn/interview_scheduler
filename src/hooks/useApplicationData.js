import { useState, useEffect } from "react";
import axios from 'axios';
import { all } from "express/lib/application";

export default function useApplicationData() {

  const setDay = day => setState({ ...state, day });



  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []);


//counts the amount of empty spots available.
  const countEmptySpots = (state) => {
    const currentDay = state.days.find((day) =>  
    day.name === state.day);

    const emptySpots = currentDay.appointments.filter(
      (id) => state.appointments[id].interview === null
    ).length;
    

     return emptySpots;
  }

//updates the spots in the navigation bar
  function updateSpots(state) {
    const currentDay = state.days.find((day) => 
    day.name === state.day);
    const index = state.days.findIndex((day) => day.name === state.day);
    const newDay = {...currentDay};
    newDay.spots = countEmptySpots(state)

    const updatedDays = [...state.days];

    updatedDays[index] = newDay;

    const updatedState = { ...state, days:updatedDays};

    return updatedState
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, { interview: appointments[id].interview })
      .then(() => {
        setState(
          updateSpots({
            ...state, appointments
          })
        );
        
      });
  }

  function deleteInterviews(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        setState(updateSpots({
          ...state,
          appointments
        }));
      
      });
  }
  return {
    state,
    setDay,
    bookInterview,
    deleteInterviews
  };
}
