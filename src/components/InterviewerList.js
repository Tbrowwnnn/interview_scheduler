import React from 'react';
import PropTypes from 'prop-types'

import InterviewerListItem from './InterviewerListItem';

import "components/InterviewList.scss"



const InterviewerList = (props) => {
  const interviewers = props.interviewers.map(inter => {
    console.log(props.value)
     
    return(

      <InterviewerListItem
      key={inter.id}
      name={inter.name}
      avatar={inter.avatar}
      selected={inter.id === props.value}
      setInterviewer={() => props.onChange(inter.id)}
       /> 
    )  

  })

  InterviewerList.propTypers = {
    interviewers: PropTypes.array.isRequired
  }

  return (

    <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">{interviewers}</ul>
  </section>
  );
};

export default InterviewerList;