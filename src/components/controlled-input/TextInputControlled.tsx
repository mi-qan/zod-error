import { useFormContext } from "react-hook-form";
import {
  TextInput,
  TextInputControlledProps,
} from "../../ui/form-input/TextInput";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/Form";

export default function TextInputControlled({
  name = "",
  label,
  placeholder,
  disableErrMess,
  controlledWrapClassName,
  classNameLabel,
  onChange,
  isRequiredLabel,
  onBlur,
  ...props
}: TextInputControlledProps) {
  const { control, getFieldState } = useFormContext();
  const fieldState = getFieldState(name);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={controlledWrapClassName}>
          {!!label && (
            <FormLabel className={classNameLabel}>
              {label}
              {isRequiredLabel && " *"}
            </FormLabel>
          )}
          <FormControl>
            <TextInput
              placeholder={placeholder}
              {...props}
              {...field}
              onChange={(value) => {
                field.onChange(value);
                onChange?.(value);
              }}
              onBlur={(e) => {
                field.onBlur();
                onBlur?.(e);
              }}
            />
          </FormControl>
          {!disableErrMess && !!fieldState.error && (
            <FormMessage className="w-full text-left">
              {fieldState.error.message}
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  );
}
