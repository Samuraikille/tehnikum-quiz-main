import React from "react";
import { Heading } from "../components/Heading";
import { AppButton } from "../components/AppButton";
import { VariantAnswerItem } from "../components/VariantAnswerItem";
const VariantData = [
  {
    id: "variant-1",
    text: "Ваш ответ",
  },
  {
    id: "variant-2",
    text: "Ваш ответ",
  },
  {
    id: "variant-3",
    text: "Ваш ответ",
  },
  {
    id: "variant-4",
    text: "Ваш ответ",
  },
];
const StepTwo = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <Heading
              headingType={"h2"}
              headingText={"2. Занимательный вопрос"}
            />
            <ul className="variants">
              {VariantData &&
                VariantData.map((elem) => (
                  <VariantAnswerItem id={elem.id} variantText={elem.text} />
                ))}
            </ul>
            <AppButton buttonText={"Далее"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
