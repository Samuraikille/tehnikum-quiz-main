import React from "react";
import { Heading } from "../components/Heading";
import { VariantAnswerItem } from "../components/VariantAnswerItem";
import { LinkButton } from "../components/LinkButton";
import { ProgressBar } from "../components/ProgressBar";
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
          <ProgressBar currentStep={2}/>
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
            <LinkButton path="/step-three" buttonText="Далее"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
