import React from "react";
import logo from "../logo.svg";
// import useJailoVal from "../hooks/useJailoVal"

if (window.DeviceOrientationEvent){
  window.addEventListener('deviceorientation', function(event){
    console.log(event)
  })
}

export const Sp: any = () => {
  // let [alpha, beta, gamma ]= useJailoVal();
  return (
    <React.Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>alpha:{alpha}</p>
        <p>alpha:{beta}</p>
        <p>alpha:{gamma}</p> */}

      </header>
    </React.Fragment>
  );
};
