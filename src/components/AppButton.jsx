import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";

export const AppButton = ({buttonText, isDisabled,onClick}) => {
    return (
      <button disabled={isDisabled} onClick={onClick} type="submit" id="next-btn">
       {buttonText}
      </button>
    )
}