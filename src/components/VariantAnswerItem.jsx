import React from "react";

export const VariantAnswerItem = ({id, variantText, emoji}) => {
    return (
        <li className="variant-wrapper">
            <input required type="radio" name={id} id={id} />
            <label htmlFor={id}>{variantText}
            <img src={emoji} alt="" />
            </label>
            
        </li>
    )
}