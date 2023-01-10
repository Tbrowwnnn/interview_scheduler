import React from 'react';
import InterviewerListItem from './InterviewerListItem';
import "components/InterviewList.scss"


const InterviewerList = (props) => {

  const interviewers = props.interviewers.map(inter => {
    
    return(

      inter.id === props.interviewer ?

      <InterviewerListItem
      key={inter.id}
      name={inter.name}
      avatar={inter.avatar}
      selected={inter.id === props.interviewer}
      setInterviewer={(event) => props.setInterviewer(inter.id)}
       /> 
       : 
       <InterviewerListItem
       key={inter.id}
       avatar={inter.avatar}
       selected={inter.id === props.interviewer}
       setInterviewer={(event) => props.setInterviewer(inter.id)}
        />
    )  

  })
  return (

    <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">{interviewers}</ul>
  </section>
  );
};

export default InterviewerList;