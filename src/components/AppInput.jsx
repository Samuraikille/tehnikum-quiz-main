import React from "react";

export const AppInput = ({
  labelText,
  errorText,
  id,
  inputPlaceholder,
  inputType,
  inputPatern,
}) => {
  return (
    <label className="input-wrapper" htmlFor="id">
      {labelText}
      <input
        required
        type="inputType"
        name="id"
        id="id"
        placeholder="inputPlaceholder"
        pattern="inputPatern"
      />
      <span id="error-message">{errorText}</span>
    </label>
  );
};
