import "components/InterviewerListItem.scss";
import React from "react";
import classNames from "classnames";

//handles whether an interviewer is selected and if it is will expand to show the interviewers name.
const InterviewerListItem = (props) => {

  const interviewerClass = classNames({
    "interviewers__item": true,
    "interviewers__item--selected": props.selected,
  });

  return (
    <li onClick={props.setInterviewer}
      className={interviewerClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
};

export default InterviewerListItem;