import React from "react";
import logo from "../logo.svg";

export const Web: any = () => {
  return (
    <React.Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This device is not supported. <br />
          Please open it with your smartphone.
        </p>
      </header>
    </React.Fragment>
  );
};
