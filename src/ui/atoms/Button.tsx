import React, {ReactNode} from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "greenButton" | "btnVehicle" | "danger";
  text?: string;
  className?: string
  icon?: ReactNode;
}

export const Button = ({
  color = "primary",
  text = "",
  className = "",
  icon = null,
  ...props
}: ButtonProps) => {
  const buttonStyles = {
    primary: " bg-primary hover:bg-gray-500 text-white ",
    secondary: "bg-white hover:bg-gray-500 border text-black",
    greenButton: "bg-secondary hover:bg-gray-500 text-white",
    btnVehicle: "bg-white hover:bg-gray-500 shadow-md text-primary",
    danger: "bg-danger hover:bg-red-700 text-white",
  };

  return (
    <button
      className={`w-full py-2 px-4 rounded-lg font-medium flex justify-center items-center gap-4 ${
        buttonStyles[color]
      } ${className}`}
      {...props}
    >
      {icon}
      {text}
    </button>
  );
};