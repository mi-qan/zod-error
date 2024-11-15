import { VariantProps, cva } from "class-variance-authority";

export const inputVariants = cva(
  'h-auto w-full rounded-md bg-background font-["SF_Pro"] text-xl font-medium leading-[2rem] ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          "border border-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 px-[1.2rem] py-[0.8rem]",
        withWrapper: "focus:outline-none border-none rounded-none",
        bare: "",
      },
      fileType: {
        default:
          "file:border-0 file:bg-transparent file:text-xl file:font-medium",
      },
    },
    defaultVariants: {
      variant: "withWrapper",
    },
  }
);

export const wrapperVariants = cva(
  "flex items-center border border-input bg-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 rounded-md [&_input]:outline-none",
  {
    variants: {
      space: {
        normal:
          "[&_.inner-wrapped]:gap-[8px] [&_.inner-wrapped]:px-[1.2rem] [&_.inner-wrapped]:py-[1rem] &_.clear-btn]:p-[1.2rem]",
        narrow:
          "[&_.inner-wrapped]:gap-[4px] [&_.inner-wrapped]:px-[4px] [&_.inner-wrapped]:py-[1rem] [&_.clear-btn]:px-[0.4rem] [&_.clear-btn]:py-[1rem]",
      },
    },
    defaultVariants: {
      space: "normal",
    },
  }
);

export const commonVariants = cva("", {
  variants: {
    bgColor: {
      white: "[--background:white]",
      transparent: "[--background:transparent]",
    },
    borderColor: {
      error: "[--input:var(--destructive)]",
    },
  },
  defaultVariants: {
    bgColor: "white",
  },
});

type InputVariantsProps = VariantProps<typeof inputVariants>;
type WrapperProps = VariantProps<typeof wrapperVariants>;
type CommonProps = VariantProps<typeof commonVariants>;

interface InputStyleProps
  extends InputVariantsProps,
    WrapperProps,
    CommonProps {}

export type { CommonProps, InputStyleProps, InputVariantsProps, WrapperProps };
