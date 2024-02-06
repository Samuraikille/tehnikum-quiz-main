import React from "react";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import Welcome from "./pages/Welcome";
import "./styles/main.css";
import StepThree from "./pages/StepThree";

const App = () => {
  return (
    <div className="App">
      {/* <Welcome /> */}
      {/* <StepOne /> */}
      {/* <StepTwo /> */}
      <StepThree/>
    </div>
  );
};

export default App;
