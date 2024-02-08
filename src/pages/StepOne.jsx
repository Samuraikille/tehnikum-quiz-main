import React from "react";
import { Heading } from "../components/Heading";
import { AppInput } from "../components/AppInput";
import { LinkButton } from "../components/LinkButton";
import { ProgressBar } from "../components/ProgressBar";

const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={1}/>
          <div className="question">
            <Heading
              headingType={"h2"}
              headingText={"1. Занимательный вопрос"}
            />
            <AppInput
              errorText={"Введите номер в правильном формате например"}
              name={"answer"}
              inputPlaceholder={"Ваш ответ"}
              inputType={"text"}
            />
            <LinkButton path="/step-two" buttonText="Далее"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
