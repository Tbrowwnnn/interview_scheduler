
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

const state = {
  interviewers: {
    "1": {  
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    }
  },
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3]
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5]
    }
  ],
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": { id: 2, time: "1pm", interview: null },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "4": { id: 4, time: "3pm", interview: null },
    "5": {
      id: 5,
      time: "4pm",
      interview: { student: "Chad Takahashi", interviewer: 2 }
    }
  }
};

export function getInterview(state, interview){

  if(interview === null){
    return null;
  }
  const interviewString = interview.interviewer.toString()

  const retrievedInterviewer = state.interviewers[interviewString];

  const interviewer = {student: interview.student, interviewer: retrievedInterviewer}

  return interviewer
}

