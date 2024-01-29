import React from "react";

export const AppButton = ({buttonText}) => {
    return (
      <button disabled type="submit" id="next-btn">
       {buttonText}
      </button>
    )
}