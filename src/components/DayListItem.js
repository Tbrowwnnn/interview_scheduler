import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

//determines which state of the sidebar is in such as whether its selected and what message to display based on the number of spots left. 
const DayListItem = (props) => {

  const dayClass = classNames({
    "day-list__item": true,
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0

  });

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)} data-testid="day">
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light" >
        {props.spots === 0 && <span>no spots remaining</span>}
        {props.spots === 1 && <span>1 spot remaining</span>}
        {props.spots > 1 && <span>{props.spots} spots remaining </span>}
      </h3>
    </li>
  );
};

export default DayListItem;