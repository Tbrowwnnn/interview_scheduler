import React from "react";
import "components/DayListItem.scss"
import classNames from "classnames";

const DayListItem = (props) => {
  const dayClass = classNames('day-list__item', {
    "--selected": props.selected,
    "--full": props.spots === 0
  })


  return (
    <li className = {dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light" >
        {props.spots === 0 && <span>no spots remaining</span>}
        {props.spots === 1 && <span>1 spot remaining</span>}
        {props.spots > 1 && <span>{props.spots} spots remaining </span>}  
       </h3>
    </li>
  );
} 

export default DayListItem;