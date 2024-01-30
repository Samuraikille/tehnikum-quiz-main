import React from "react";
import { Heading } from "../components/Heading";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading text="Добро пожаловать в квиз от лучшего учебного центра" />
          <form className="welcome__form">
            <AppInput
              errorText={"Введите номер в правильном формате например"}
              id={"username"}
              inputPlaceholder={"Ваш ответ"}
              inputType={"text"}
              labelText={"Ваше имя"}
            />
            <AppInput
              errorText={"Введите номер в правильном формате например"}
              id={"phone"}
              inputPlaceholder="+998 9- --- -- -- "
              inputType={"tel"}
              labelText={"Ваш номер"}
              inputPatern={`^(?:\+998)?(?:\d{2})?(?:\d{7})$`}
            />
            <AppButton buttonText={"Далее"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
