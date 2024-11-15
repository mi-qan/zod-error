import * as React from "react";
import { cx } from "class-variance-authority";
import { ChangeEventHandler, useRef, useState } from "react";
import {
  InputStyleProps,
  commonVariants,
  inputVariants,
  wrapperVariants,
} from "./inputVariantProps";
import getEventValue from "../../shared/utils/getEventValue";
import { composeRefs } from "../../shared/utils/compose-refs";
import { Button } from "../Button";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">,
    InputStyleProps {
  wrapperClassName?: string;
  isClearButton?: boolean;
  isShowPasswordButton?: boolean;
  handleOnChange?: (value: string) => void;
  showClearOnValueOnly?: boolean;
  ["aria-invalid"]?: boolean;
  onChange?: (
    value: string | ChangeEventHandler<HTMLInputElement> | undefined
  ) => void;
}

export interface TextInputControlledProps extends InputProps {
  disableErrMess?: boolean;
  label?: string;
  controlledWrapClassName?: string;
  classNameLabel?: string;
  isRequiredLabel?: boolean;
}

const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      className,
      variant,
      space,
      wrapperClassName,
      isClearButton,
      isShowPasswordButton,
      bgColor,
      ["aria-invalid"]: inValid,
      handleOnChange,
      showClearOnValueOnly,
      ...props
    },
    ref
  ) => {
    const _inputRef = useRef<HTMLInputElement>(null);
    const [showClearBtn, setShowClearBtn] = useState(
      !showClearOnValueOnly || (showClearOnValueOnly && !!props.value)
    );
    const withDivWrapper = variant === "withWrapper";

    function renderInput() {
      return (
        <input
          type={type}
          className={cx(
            commonVariants({
              bgColor,
              borderColor: inValid ? "error" : undefined,
            }),
            inputVariants({ variant, className: `${className}` })
          )}
          ref={composeRefs(ref, _inputRef)}
          aria-invalid={inValid}
          {...props}
          onChange={(e) => {
            props.onChange?.(getEventValue(e));
            handleOnChange?.(e.currentTarget.value);
            if (showClearOnValueOnly) {
              setShowClearBtn(!!e.currentTarget.value);
            }
          }}
        />
      );
    }

    function handleClear() {
      if (_inputRef.current) {
        _inputRef.current.value = "";
        props.onChange?.("");
        handleOnChange?.("");
        if (showClearOnValueOnly) {
          setShowClearBtn(false);
        }
      }
    }

    if (withDivWrapper) {
      return (
        <label
          className={cx(
            commonVariants({
              bgColor,
              borderColor: inValid ? "error" : undefined,
            }),
            wrapperVariants({
              space: space,
              className: wrapperClassName,
            }),
            isClearButton && "relative",
            isShowPasswordButton && "relative"
          )}
        >
          <div className="inner-wrapped grow-1 flex w-full items-center">
            {renderInput()}
          </div>
          {isClearButton && (showClearBtn || !!props.value) && (
            <Button
              type="reset"
              size="icon"
              variant="ghost"
              className="clear-btn border-l-solid rounded-l-none border-l-[1px] border-l-input p-[1.2rem]"
              aria-label="clear"
              disabled={props.disabled}
              onClick={handleClear}
            ></Button>
          )}
        </label>
      );
    }

    return <>{renderInput()}</>;
  }
);

TextInput.displayName = "TextInput";

export { TextInput };
