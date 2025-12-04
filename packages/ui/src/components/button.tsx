import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@workspace/ui/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center text-base justify-center gap-2.5 cursor-pointer whitespace-nowrap rounded-md font-normal transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [&>svg]:size-6",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-600",
        outline:
          "border border-primary bg-transparent hover:bg-primary hover:text-primary-foreground text-primary",
        secondary: "bg-white text-primary hover:bg-white/85",
      },
      size: {
        default: "h-14 px-6 py-4 rounded-[10px]",
        md: "h-12 px-5 py-3 rounded-[8px]"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
