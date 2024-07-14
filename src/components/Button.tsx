import React, { ReactNode } from "react";

interface IButtonProps {
  className?: string;
  children: ReactNode;
  buttonColor?: "red" | "blue" | "green";
}

const Button: React.FC<IButtonProps> = ({ className, children, buttonColor }) => {
  /** ---> Default color styles using Tailwind CSS classes */
  const colorClasses = {
    red: "bg-red-500/5 text-red-500 border-red-500/45",
    blue: "bg-light-accentPrimary/5 text-light-accentPrimary border-light-accentPrimary/45",
    green: "bg-light-accentSecondary/5 text-light-accentSecondary border-light-accentSecondary/45",
  };

  const selectedColorClasses = buttonColor
    ? colorClasses[buttonColor]
    : "bg-light-error/5 text-light-error/70 border-light-error/30";

  /** --->  Default styles */
  const defaultClasses = "flex items-center px-4 py-2 rounded-md mt-2 border-[1.25px]";

  const combinedClasses = `${defaultClasses} ${selectedColorClasses} ${className}`;

  return <button className={combinedClasses}>{children}</button>;
};

export default Button;
