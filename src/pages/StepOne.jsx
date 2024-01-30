import React from "react";
import { Heading } from "../components/Heading";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";

const StepOne = () => {
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
            <Heading headingType={"h2"} headingText={"1. Занимательный вопрос"}/>
            <AppInput
              errorText={"Введите номер в правильном формате например"}
              name={"answer"}
              inputPlaceholder={"Ваш ответ"}
              inputType={"text"}
            />
            <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder="Ваш ответ"
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label>
            <AppButton buttonText={"Далее"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
