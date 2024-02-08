import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const goToNextPage = () => {
    if (nameError && phoneError) {
      navigate("/step-one");
    }
  };
  const handlerInputName = (value) => {
    setNameValue(value);
    validateName();
  };
  const handlerInputPhone = (value) => {
    setPhoneValue(value);
    validatePhone();
  };
  const validateName = () => {
    if (!nameValue) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };
  const validatePhone = () => {
    if (!phoneValue) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };
  const clickHandler = () => {
    validateName();
    validatePhone();
    goToNextPage();
  };
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
              onChange={(value) => handlerInputName(value)}
              hasError={nameError}
              errorText={"Введите номер в правильном формате например"}
              id={"username"}
              inputPlaceholder={"Ваш ответ"}
              inputType={"text"}
              labelText={"Ваше имя"}
            />
            <AppInput
              value={phoneValue}
              onChange={(value) => handlerInputPhone(value)}
              hasError={phoneError}
              errorText={"Введите номер в правильном формате например"}
              id={"phone"}
              inputPlaceholder="+998 9- --- -- -- "
              inputType={"tel"}
              labelText={"Ваш номер"}
            />
            <AppButton buttonText={"Далее"} onClick={clickHandler} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
