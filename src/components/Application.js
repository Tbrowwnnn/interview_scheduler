import React from "react";
import DayList from "./DayList";
import "components/Application.scss";
import { useState, useEffect } from "react";
import Appointment from "./Appointment";
import axios from 'axios';
import { getAppointmentsForDay, getInterview } from "../helpers/selectors";


const Application = function(props) {

  // const [days, setDays] = useState([]);
  // const [day, setDay] = useState("Monday")

  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers:{}
  });



  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
      console.log("get interviewers", all[2].data)

    });
  }, []);

  // console.log('appoint', state.days);

  // console.log('function return', getAppointmentsForDay(state, state.day));

  const dailyAppointments = getAppointmentsForDay(state, state.day);


  const data = dailyAppointments.map(date => {

    const interview = getInterview(state, date.interview)

    return (
      <Appointment
        key={date.id}
        id={date.id}
        time={date.time}
        interview={interview}
      />
    );
  });

  console.log('here', state);
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu"><DayList
          id={state.days}
          days={state.days}
          value={state.day}
          onChange={setDay}
        /></nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {data}<Appointment key='last' time='5pm' />
      </section>
    </main>
  );
};

export default Application;