import React, { useEffect, useState } from "react";
import { Heading } from "../components/Heading";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";

const Welcome = () => {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  useEffect(() => {
    if (!nameValue) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!phoneValue) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  });

  useEffect(() => {
    console.log(nameValue);
  }, [nameValue, phoneValue]);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading
            headingType={"h1"}
            headingText="Добро пожаловать в квиз от лучшего учебного центра"
          />
          <form className="welcome__form">
            <AppInput
              value={nameValue}
              onChange={setNameValue}
              hasError={nameError}
              errorText={"Введите номер в правильном формате например"}
              id={"username"}
              inputPlaceholder={"Ваш ответ"}
              inputType={"text"}
              labelText={"Ваше имя"}
            />
            <AppInput
              value={phoneValue}
              onChange={setPhoneValue}
              hasError={phoneError}
              errorText={"Введите номер в правильном формате например"}
              id={"phone"}
              inputPlaceholder="+998 9- --- -- -- "
              inputType={"tel"}
              labelText={"Ваш номер"}
            />
            <AppButton buttonText={"Далее"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
