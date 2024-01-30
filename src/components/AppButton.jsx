import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";

export const AppButton = ({buttonText, isDisabled}) => {
    return (
      <button disabled={isDisabled} type="submit" id="next-btn">
       {buttonText}
      </button>
    )
}