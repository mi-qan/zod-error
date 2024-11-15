import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Loader2Icon } from "lucide-react";
import { cn } from "../shared/utils/common";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm leading-[1.5em] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        "moon-blue":
          "bg-moon-blue text-secondary-foreground hover:bg-moon-blue/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        "ghost-border":
          "hover:bg-accent border-[#DCDCDC] hover:text-accent-foreground border-solid border-[1px]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "pt-[1rem] pb-[0.8rem] px-[1.6rem]",
        sm: "rounded-md px-[1.2rem]",
        lg: "rounded-md px-[3.2rem]",
        icon: "p-[1.2rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {loading ? (
          <Loader2Icon className="animate-spin spin-in-2" />
        ) : (
          children
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
