import React from "react";
import { Heading } from "../components/Heading";
import { LinkButton } from "../components/LinkButton";
import { EmojiItem } from "../components/EmojiItem";
import { ProgressBar } from "../components/ProgressBar";
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
          <ProgressBar currentStep={3}/>
          <div className="question">
            <Heading headingType={"h2"} headingText={"3. Занимательный вопрос"}/>
            <ul className="emoji-variants">
              {EmojiData && EmojiData.map((elem) => (
                <EmojiItem id={elem.id} emoji={elem.emoji} variantText={elem.text} />
              ))}
            </ul>
            <LinkButton path="/step-four" buttonText="Далее"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
