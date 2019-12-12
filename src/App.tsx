import React from "react";
import "./App.css";
import { Sp } from "./components/sp";
import { Web } from "./components/web";

const deviceOrientationHandler = () => {
  console.log(window.DeviceOrientationEvent);
}
if (window.DeviceOrientationEvent) {
  console.log("????")
  window.addEventListener("deviceorientation", deviceOrientationHandler, true);
} else {
  window.addEventListener("deviceorientation", deviceOrientationHandler, false);
}

const App: React.FC = () => {
  return (
    <div className="App">
      {window.DeviceOrientationEvent ? <Sp /> : <Web />}
    </div>
  );
};
export default App;
