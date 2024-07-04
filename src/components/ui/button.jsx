import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
  primary: "bg-purple-600 text-white shadow-lg hover:bg-purple-700",
  secondary: "bg-purple-200 text-purple-700 shadow-lg hover:bg-purple-300",
  outline: "border border-purple-600 text-purple-600 shadow-lg hover:bg-purple-50",
};

export const Button = React.forwardRef(
  ({ className, variant = "primary", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "px-4 py-2 rounded-md transition-colors duration-200",
        buttonVariants[variant],
        className
      )}
      {...props}
    />
  )
);

Button.displayName = "Button";
