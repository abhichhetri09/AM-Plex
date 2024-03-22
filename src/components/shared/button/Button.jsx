import React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/utils";

const buttonVariants = cva(
  "flex items-center justify-center gap-2 text-sm rounded-md transition-all duration-300",
  {
    variants: {
      size: {
        sm: "px-2 py-1.5",
        md: "px-4 py-2",
        lg: "px-5 py-3",
      },
      color: {
        primary: "bg-blue-500 hover:bg-blue-600",
        secondary: "bg-gray-500 hover:bg-gray-600",
        danger: "bg-red-500 hover:bg-red-600",
      },
    },
    defaultVariants: {
      size: "md",
      color: "primary",
    },
  }
);

const Button = ({ className, size, color, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ className, size, color }))}
      {...props}
    />
  );
};

export default Button;
