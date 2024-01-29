import React from "react";
import { AppButton } from "../components/AppButton";
import { Heading } from "../components/Heading";

const Thanks = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <Heading text={"Спасибо за прохождение опроса!"}/>
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <button type="button" id="get-link">
            <AppButton buttonText={"Получить ссылку"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
