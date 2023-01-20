import "./styles.scss";
import React, { Fragment } from 'react';
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Error from "./Error";
import Confirm from "./Confirm";
import useVisualMode from "hooks/useVisualMode";

const EMPTY = 'EMPTY';
const SHOW = 'SHOW';
const CREATE = 'CREATE';
const SAVING = 'SAVING';
const DELETE = 'DELETE';
const CONFIRM = 'CONFIRM';
const EDIT = 'EDIT';
const ERROR_DELETE = 'ERROR_DELETE';
const ERROR_SAVING = 'ERROR_SAVING';

const Appointment = (props) => {


  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  //handles transitioning states when an appointment is saved
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(error => transition(ERROR_SAVING, true));
  }

  //handles transitioning states when an appointment is deleted
  function deleteInterview(event) {
    transition(DELETE, true);

    props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(error => transition(ERROR_DELETE, true));
  }

  //defines what each state does when in that state and will set props based on that state. 
  return (
    <article className="appointment" data-testid="appointment">
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
        {mode === EDIT &&
          <Form
            student={props.interview.student}
            interviewer={props.interview.interviewer.id}
            interviewers={props.interviewer}
            onSave={(name, interviewer) => save(name, interviewer)}
            onCancel={() => back()}
          />}
        {mode === CONFIRM && (
          <Confirm
            message={"Are you sure you want to ruin everything?"}
            onConfirm={(event) => deleteInterview(event)}
            onCancel={() => back()}
          />)}
        {mode === SAVING &&
          <Status
            message={"Stop being so impatient!"}
          />}
        {mode === DELETE &&
          <Status
            message={"You're making a huge mistake!!"}
          />}
        {mode === CREATE &&
          <Form
            interviewers={props.interviewer}
            onCancel={() => back()}
            onSave={(name, interviewer) => save(name, interviewer)}
          />
        }
        {mode === ERROR_DELETE &&
          <Error
            message={"Could not delete appointment"}
            onClose={() => back()}
          />}
          {mode === ERROR_SAVING &&
          <Error
            message={"Could not save appointment"}
            onClose={() => back()}
          />}
      </Fragment>
    </article>
  );
};

export default Appointment;