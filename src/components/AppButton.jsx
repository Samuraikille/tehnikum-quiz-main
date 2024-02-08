import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";

export const AppButton = ({buttonText, isDisabled,onClick}) => {
    return (
      <button disabled={isDisabled} onClick={onClick} type="button" id="next-btn">
       {buttonText}
      </button>
    )
}