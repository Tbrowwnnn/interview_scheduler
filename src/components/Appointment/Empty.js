import React from 'react';

//element that represents an empty appointment slot
const Empty = (props) => {
  return (

    <main className="appointment__add" data-testid="appointment">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
  );
};

export default Empty;