import React from "react";

export const EmojiItem = ({id, variantText, emoji}) => {
    return (
        <li className="variant-wrapper">
        <input required type="radio" name={id} id={id} />
        <label htmlFor={id}>
          <img src={emoji} alt="laugh" />
          <p>{variantText}</p>
        </label>
      </li>
    )
}