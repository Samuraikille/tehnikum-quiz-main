import React, { useEffect, useState } from "react";
import { Heading } from "../components/Heading";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";

const StepOne = () => {
  const [nameValue, setNameValue] = useState("");
  const [nameError, setNameError] = useState(false);
  useEffect(() => {
    if (!nameValue) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  });
  useEffect(() => {
    console.log(nameValue);
  }, [nameValue]);
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
              value={nameValue}
              onChange={setNameValue}
              hasError={nameError}
              errorText={"Введите номер в правильном формате например"}
              name={"answer"}
              inputPlaceholder={"Ваш ответ"}
              inputType={"text"}
            />
            <AppButton buttonText={"Далее"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
