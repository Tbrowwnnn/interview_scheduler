import "./styles.scss";
import React, { Fragment } from 'react';
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import useVisualMode from "hooks/useVisualMode";

const EMPTY = 'EMPTY';
const SHOW = 'SHOW';
const CREATE = 'CREATE';
const SAVING = 'SAVING';
const DELETE = 'DELETE';
const CONFIRM = 'CONFIRM';
const EDIT = 'EDIT';

const Appointment = (props) => {


  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);
    setTimeout(() => {
      props.bookInterview(props.id, interview);
      transition(SHOW);
    }, 1000);
  }

  function deleteInterview(){
    transition(DELETE)
    setTimeout(() => {
      props.deleteInterview(props.id)
      transition(EMPTY)
    }, 1000);
  }

  console.log('interviewer', props)

  return (
    <article className="appointment">
      <Fragment>
        <Header
          time={props.time}
        />
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && (
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer}
            onDelete={() => transition(CONFIRM)}
            onEdit={() => transition(EDIT)}
          />
        )}
        {mode === EDIT && <Form 
        student={props.interview.student}
        interviewer={props.interview.interviewer.id}
        interviewers={props.interviewer}
        onSave={(name, interviewer) => save(name, interviewer)}
        onCancel={() => back()} 
        />}
        {mode === CONFIRM && (
        <Confirm 
          message={"Are you sure you want to ruin everything?"}
          onConfirm={() => deleteInterview()}
          onCancel={() => back()}
        />)}
        {mode === SAVING && <Status
          message={"Stop being so impatient!"} />}
        {mode === DELETE && <Status message={"You're making a huge mistake!!"} />}
        {mode === CREATE &&
          <Form
            interviewers={props.interviewer}
            onCancel={() => back()}
            onSave={(name, interviewer) => save(name, interviewer)}
          />
        }
        {/* {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer}/> : <Empty />} */}
      </Fragment>
    </article>
  );
};

export default Appointment;