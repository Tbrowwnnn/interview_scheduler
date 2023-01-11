import "./styles.scss";
import React, { Fragment } from 'react'
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";


const Appointment = (props) => {
  

  return(
    <article className="appointment">
      <Fragment>
      <Header 
      time={props.time}
      />
      {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer}/> : <Empty />}
      </Fragment>
    </article>
  )
}

export default Appointment;