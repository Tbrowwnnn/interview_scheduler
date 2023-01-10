import "components/InterviewerListItem.scss";
import React from "react";
import classNames from "classnames";


const InterviewerListItem = (props) => {

  const interviewerClass = classNames({
    "interviewers__item": true,
    "interviewers__item--selected": props.selected,
    
    
  })

  return (
    <li onClick={props.setInterviewer} 
    className={interviewerClass}>
  <img
    className="interviewers__item-image"
    src={props.avatar}
    alt={props.name}
  />
  {props.name}
</li>
  )
}

export default InterviewerListItem;