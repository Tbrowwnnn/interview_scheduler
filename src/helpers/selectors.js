
export function getAppointmentsForDay(state, day) {
  let index = -1;
  if (state.days.length === 0) {
    return [];
  }

  for (let i = 0; i < state.days.length; i++) {
    if (state.days[i].name === day) {
      index = i;
    }
  } 

  if (index === -1) {
    return [];
  }

  const appointmentList = state.days[index].appointments;

  const data = Object.values(appointmentList).map(date => {
    const dateToString = date.toString()
    
    return (
      state.appointments[dateToString]
    );
  });

  return data;
}

