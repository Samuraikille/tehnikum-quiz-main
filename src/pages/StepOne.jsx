import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";
import { useNavigate } from "react-router-dom";

const StepOne = () => {
  const navigate = useNavigate();
  const [textValue, setTextValue] = useState("");
  const [textError, setTextError] = useState(false);
  const goToNextPage = () => {
    if (!textValue) {
      navigate("/step-two")
    }
  }
  const handlerInputText = (value) => {
    setTextValue(value);
    validateText();
  }; 
  const validateText = () => {
    if (!textValue) {
      setTextError(true);
    } else {
      setTextError(false);
    }
  };
  const clickHandler = ()=>{
    validateText();
    goToNextPage()
  }
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <Heading
              headingType={"h2"}
              headingText={"1. Занимательный вопрос"}
            />
            <AppInput
              value={textValue}
              onChange={(value) => handlerInputText(value)}
              hasError={textError}
              errorText={"Введите номер в правильном формате например"}
              name={"answer"}
              inputPlaceholder={"Ваш ответ"}
              inputType={"text"}
            />
            <AppButton buttonText={"Далее"} onClick={clickHandler}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
