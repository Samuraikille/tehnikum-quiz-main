import React from "react";
import { Heading } from "../components/Heading";
import { LinkButton } from "../components/LinkButton";
import { VariantAnswerItem } from "../components/VariantAnswerItem";
import { ProgressBar } from "../components/ProgressBar";
const VariantData = [
  {
    id: "variant-1",
    text: "1",
  },
  {
    id: "variant-2",
    text: "2",
  },
  {
    id: "variant-3",
    text: "3",
  },
  {
    id: "variant-4",
    text: "4",
  },
  {
    id: "variant-5",
    text: "5",
  },
];
const StepFour = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
         <ProgressBar currentStep={4}/>
          <div className="question">
            <Heading
              headingType={"h2"}
              headingText={"4. Занимательный вопрос"}
            />
            <ul className="level-variants">
              {VariantData &&
                VariantData.map((elem) => (
                  <VariantAnswerItem id={elem.id} variantText={elem.text} />
                ))}
            </ul>
            <LinkButton path="/thanks" buttonText="Далее"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
