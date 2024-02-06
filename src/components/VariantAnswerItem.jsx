import React from "react";

export const VariantAnswerItem = ({id, variantText,}) => {
    return (
        <li className="variant-wrapper">
            <input required type="radio" name={id} id={id} />
            <label htmlFor={id}>{variantText}
            </label>
        </li>
    )
}