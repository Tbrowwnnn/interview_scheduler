import { useState, useEffect } from 'react';

export default function useVisualMode(order) {

  const [mode, setMode] = useState(order);
  const [history, setHistory] = useState([order]);


  function transition(next, replace = false) {
    if (replace === true) {
      history.pop();
      history.push(next);

      setMode(next);

      return mode;
    }
    setMode(next);
    history.push(next);

    return mode;
  }

  function back() {

    if (history.length > 1) {
      history.pop();
      setMode(history[history.length - 1]);
    }
    return mode;
  }

  return {
    mode,
    transition,
    back
  };
}


