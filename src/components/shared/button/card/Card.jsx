import React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/utils/classMerger";

const cardVariants = cva("", {
  variants: {
    size: {
      xyz: "px-6 py-4",
      sm: "px-2 py-4",
      lg: "px-6 py-7",
    },
    status: {
      info: "bg-gray-600",
      error: "bg-red-500",
    },
    rounded: {
      sm: "rounded-sm",
      lg: "rounded-lg",
    },
  },
  defaultVariants: {
    size: "xyz",
    status: "info",
    rounded: "sm",
  },
});

const Card = ({ className, size, status, rounded, ...props }) => {
  return (
    <div
      className={cn(cardVariants({ className, size, status, rounded }))}
      {...props}
    />
  );
};

export { Card, cardVariants };
