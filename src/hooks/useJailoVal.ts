import React, { useState, useEffect } from "react";

function useJailoVal() {
  const isClient = typeof typeof window === 'object';
  function getVecValue() {
    return {
      alpha: isClient ? "" : undefined,
      beta: isClient ? "" : undefined,
      gamma: isClient ? "" : undefined
    };
  }
  let [jailo, setJailoValues] = useState(getVecValue)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleSetVecValue() {
      setJailoValues(getVecValue) 
    }

    window.addEventListener("deviceorientation", handleSetVecValue);
    return () =>
      window.removeEventListener("deviceorientation", handleSetVecValue);
  }, []);
  return jailo;
}

export default useJailoVal