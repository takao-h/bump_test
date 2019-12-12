import React from "react";
import "./App.css";
import { Sp } from "./components/sp";
// import { Web } from "./components/web";

// あとで別ファイルに押し込む
const agent:any = window.navigator.userAgent.toLowerCase() 

const App: React.FC = () => {
  return (
    <div className="App">
      {/* {agent.indexOf('iphone') !== -1 ? <Sp /> : <Web />} */}
      <Sp/>
    </div>
  )
}
export default App;
