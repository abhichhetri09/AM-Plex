import React from "react";
import { cardVariants } from "./card/Card";

const Button = () => {
  return (
    <div className={cn(cardVariants({ className, size, status, rounded }))}>
      Button
    </div>
  );
};

export default Button;
