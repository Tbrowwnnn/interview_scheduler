//function used to get an appointment based on the day that is fed into it. 
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
    const dateToString = date.toString();

    return (
      state.appointments[dateToString]
    );
  });

  return data;
}

//function used to get an interviewer based on whichever day is fed into it. 
export function getInterviewerForDay(state, day) {
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

  const interviewList = state.days[index].interviewers;

  const data = Object.values(interviewList).map(date => {
    const dateToString = date.toString();

    return (
      state.interviewers[dateToString]
    );
  });

  return data;
}

//will locate an interviewer based on the interview number. 
export function getInterview(state, interview) {

  if (interview === null) {
    return null;
  }
  const interviewString = interview.interviewer.toString();

  const retrievedInterviewer = state.interviewers[interviewString];

  const interviewer = { student: interview.student, interviewer: retrievedInterviewer };

  return interviewer;
}

