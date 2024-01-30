import React from "react";

export const AppInput = ({
  labelText,
  errorText,
  id,
  inputPlaceholder,
  inputType,
}) => {
  return (
    <label className="input-wrapper" htmlFor="id">
      {labelText}
      <input
        required
        type={inputType}
        name={id}
        id={id}
        placeholder={inputPlaceholder}        
      />
      <span id="error-message">{errorText}</span>
    </label>
  );
};
