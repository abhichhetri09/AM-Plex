import React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/utils";

const linkVariants = cva("", {
  variants: {},
  defaultVariants: {},
});

const Link = ({ className, ...props }) => {
  return <a className={cn(linkVariants({ className }))} {...props} />;
};

export { Link };
