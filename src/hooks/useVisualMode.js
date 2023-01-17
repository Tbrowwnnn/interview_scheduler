import { useState, useEffect } from 'react';

export default function useVisualMode(order) {

  // const [mode, setMode] = useState(order);
  const [history, setHistory] = useState([order]);

  // console.log([history])
  function transition(next, replace = false) {
    
    // if (replace === true) {
      // history.pop();
      // console.log('history', history)
      // setHistory((prev) => [...prev.slice(0, -1), next])
      
      // setMode(next);
      // // history.push(next);
      // // console.log('its true')
      
      // return mode;
      setHistory((prev) => replace ? [...prev.slice(0, -1), next]: [...prev, next])
  // }
    
    // setHistory((prev) => [...prev, next])
    // setMode(next)

    // return mode;
  }

  function back() {

    setHistory((prev) => prev.length > 1 ? prev.slice(0, -1) : prev)

  //   if (history.length > 1) {
  //     history.pop();
  //     setMode(history[history.length - 1]);
  //   }
  //   return mode;
  }

  return {
    mode : history[history.length - 1],
    transition,
    back
  };
}


