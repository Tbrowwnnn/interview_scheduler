import { useState, useEffect } from 'react';

export default function useVisualMode(order) {

  const [history, setHistory] = useState([order]);

  //handles the history of  states in order to move back and form between states.
  function transition(next, replace = false) {

    setHistory((prev) => replace ? [...prev.slice(0, -1), next] : [...prev, next]);
  }

  //handles going back to a previous state
  function back() {

    setHistory((prev) => prev.length > 1 ? prev.slice(0, -1) : prev);
  }

  return {
    mode: history[history.length - 1],
    transition,
    back
  };
}


