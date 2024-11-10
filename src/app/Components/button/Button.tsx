import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "stylist" | "stylistOutline";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  variant = "primary",
  size = "medium",
  children,
  ...props
}) => {
  // Tailwind classes for different variants
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:opacity-90",
    secondary: "bg-gray-600 text-white hover:opacity-90",
    stylist:
      "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium",
    stylistOutline: "",
    outline:
      "bg-transparent text-blue-600 border-2 border-blue-600 hover:opacity-90",
  };

  // Tailwind classes for different sizes
  const sizeClasses = {
    small: "py-1.5 px-3 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-2.5 px-5 text-lg",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg cursor-pointer transition ease-in-out duration-200 gap-2 disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]}`}
      {...props}
    >
      {label}
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
