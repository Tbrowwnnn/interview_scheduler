import React, { useState } from "react"
import InterviewerList from "../InterviewerList"
import Button from "../Button"


const Form = (props) => {

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = () => {
   return setStudent(''), setInterviewer(null)
  }

  console.log(reset)

  const cancel = () => {
     return reset(), props.onCancel()
  }

  return(
    <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off">
      <input
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        placeholder="Enter Student Name"
        input="hello"
        onChange={(event) => setStudent(event.target.value)}
        value={student}
      />
    </form>
     <InterviewerList 
     value={interviewer}
     interviewers={props.interviewers}
    /> 
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={cancel}>Cancel</Button>
      <Button confirm onClick={props.onSave}>Save</Button>
    </section>
  </section>
</main>
  )
}

export default Form