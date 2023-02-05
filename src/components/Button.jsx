import React from "react";

const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button
      type="button"
      className={`bg-[${bgColor}] text-[${color}] rounded-${borderRadius} text-[${size}] p-3 hover:drop-shadow-xl `}
    >
      {text}
    </button>
  );
};

export default Button;
