import React from "react";
// import Raj from "./Raj";
import Wrk from "./Wrk";
import Bat from "./Bat";
import ErrorBoundry from "./ErrorBoundry";

export default function App() {
  return (
    <div>
      {/* <Raj /> */}
      {/* <Wrk /> */}
     
        <Bat hero="joker" />
     
        <Bat hero="superman" />
    
      {/* <Bat /> */}
    </div>
  );
}
