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
      // console.log("get interviewers", all[0].data);
    });
  }, []);

  // const spotter = state.days[0]
  // console.log('interviewers', spotter);

  function updateSpots(id, day) {

    axios.get('/api/days')
      .then((all) => {
        setState(prev => ({ ...prev, days: all.data }));
        // console.log('all data', all.data);
      });
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
        setState({
          ...state,
          appointments
        });
        updateSpots();
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
        setState({
          ...state,
          appointments
        });
        updateSpots();
      });
  }
  return {
    state,
    setDay,
    bookInterview,
    deleteInterviews
  };
}
