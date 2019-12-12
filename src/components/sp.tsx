import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import useJailoVal from "../hooks/useJailoVal"


export const Sp: any = () => {
  let jailo = useJailoVal();
  return (
    <React.Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>alpha:{jailo.alpha}</p>
      </header>
    </React.Fragment>
  );
};
