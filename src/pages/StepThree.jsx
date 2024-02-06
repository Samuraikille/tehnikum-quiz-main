import React from "react";
import { Heading } from "../components/Heading";
import { AppButton } from "../components/AppButton";
import { VariantAnswerItem } from "../components/VariantAnswerItem";
import { EmojiItem } from "../components/EmojiItem";
const EmojiData = [
  {
    id: "variant-1",
    emoji: "./img/laugh.png",
    text: "Ваш ответ 1",
  },
  {
    id: "variant-2",
    emoji: "./img/hearts.png",
    text: "Ваш ответ 2",
  },
  {
    id: "variant-3",
    emoji: "./img/smirk.png",
    text: "Ваш ответ 3",
  },
  {
    id: "variant-4",
    emoji: "./img/fright.png",
    text: "Ваш ответ 4",
  },
];

const StepThree = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2 _active"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <Heading headingType={"h2"} headingText={"3. Занимательный вопрос"}/>
            <ul className="emoji-variants">
              {EmojiData && EmojiData.map((elem) => (
                <EmojiItem id={elem.id} emoji={elem.emoji} variantText={elem.text} />
              ))}
            </ul>
            <AppButton buttonText={"Далее"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
