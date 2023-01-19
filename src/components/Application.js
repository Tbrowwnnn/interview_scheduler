import React from "react";
import DayList from "./DayList";
import "components/Application.scss";
import { useState, useEffect } from "react";
import Appointment from "./Appointment";
import axios from 'axios';
import { getAppointmentsForDay, getInterview, getInterviewerForDay } from "../helpers/selectors";
import useApplicationData from '../hooks/useApplicationData';

//handles appointment data and sends out appointment data as props
const Application = function(props) {

  const {
    state,
    setDay,
    bookInterview,
    deleteInterviews
  } = useApplicationData();

  const dailyAppointments = getAppointmentsForDay(state, state.day);

  const interviewer = getInterviewerForDay(state, state.day);

  const data = dailyAppointments.map(date => {

    const interview = getInterview(state, date.interview);

    return (
      <Appointment
        key={date.id}
        id={date.id}
        time={date.time}
        interview={interview}
        interviewer={interviewer}
        bookInterview={bookInterview}
        cancelInterview={deleteInterviews}
      />
    );
  });

//represents the sidebar on the scheduler and where DayList props are sent so we know which days.
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
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
