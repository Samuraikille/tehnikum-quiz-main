import React from "react";

export const AppInput = ({
  labelText,
  errorText,
  id,
  inputPlaceholder,
  inputType,
  value,
  onChange,
  hasError,
}) => {
  return (
    <label className={`input-wrapper ${hasError && "_error"}`} htmlFor="id">
      {labelText}
      <input
        required
        type={inputType}
        name={id}
        id={id}
        placeholder={inputPlaceholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {hasError && <span id="error-message">{errorText}</span>}
    </label>
  );
};
