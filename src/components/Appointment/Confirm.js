import React from 'react';
import Button from '../Button';


//this is the confirm window that pops up to make sure you want to cancel an appointment

const Confirm = (props) => {

  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">{props.message}</h1>
      <section className="appointment__actions">
        <Button onClick={props.onCancel} danger>Cancel</Button>
        <Button onClick={props.onConfirm} danger>Confirm</Button>
      </section>
    </main>
  );
};

export default Confirm;