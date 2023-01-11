import React from "react";
import DayListItem from "./DayListItem";

const DayList = (props) => {

  const dayList = props.days.map(dayed => {
    
    return(

      <DayListItem 
      key={dayed.id}
      name={dayed.name}
      spots={dayed.spots}
      selected={dayed.name === props.value}
      setDay={props.onChange} />
    )
  })

  return (<ul>
    {dayList}
  </ul>
  )
}

export default DayList;