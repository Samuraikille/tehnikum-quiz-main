import React from "react";
import { Heading } from "../components/Heading";
import { AppButton } from "../components/AppButton";
import { VariantAnswerItem } from "../components/VariantAnswerItem";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const goToNextPage = () => {
    if(VariantAnswerItem) {
      navigate("/thanks")
    }
  };
  const clickHandler = () => {
    goToNextPage();
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">85%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2 _active"></div>
              <div className="indicator__unit indicator__unit-3 _active"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
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
            <AppButton buttonText={"Далее"} onClick={clickHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
