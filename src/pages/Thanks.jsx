import React from "react";
import { AppButton } from "../components/AppButton";
import { Heading } from "../components/Heading";

const Thanks = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <Heading headingType={"h1"} headingText="Спасибо за прохождение опроса!" />
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
            <AppButton buttonText={"Получить ссылку"} />
        </div>
      </div>
    </div>
  );
};

export default Thanks;
