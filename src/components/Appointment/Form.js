import React, { useState } from "react";

import InterviewerList from "../InterviewerList";
import Button from "../Button";


//element that represents the form where you can edit and create a new appointment
const Form = (props) => {

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  const reset = () => {
    return setStudent(''), setInterviewer(null);
  };
  const cancel = () => {
    return reset(), props.onCancel(), setError("");
  };

  //determines whether there is input in the form before submission is allowed. 
  function validate() {
    if (student === '') {
      setError("Student name cannot be blank");
      return;
    }
    if (interviewer === null) {
      setError("Please select an interviewer");
      return;
    }
    setError("");
    props.onSave(student, interviewer);
  }


  //element that is an empty form where a user can create a new appointment. InterviewerList and button props are sent here. 
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={event => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            input="hello"
            onChange={(event) => setStudent(event.target.value)}
            value={student}
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">{error}</section>

        <InterviewerList
          value={interviewer}
          interviewers={props.interviewers}
          onChange={setInterviewer}
        />

      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">

          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={validate}>Save</Button>

        </section>
      </section>
    </main>
  );
};

export default Form;