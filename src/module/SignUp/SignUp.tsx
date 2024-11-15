import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { signUpSchemas, signUpSchemasType } from "./signUpSchemas";
import TextInputControlled from "../../components/controlled-input/TextInputControlled";
import { Button } from "../../ui/Button";

const defaultValues: signUpSchemasType = {
  userName: "",
  userPassword: "",
  email: "",
  confirmPassword: "",
};

export default function SignUp() {
  const methods = useForm<signUpSchemasType>({
    defaultValues,
    resolver: zodResolver(signUpSchemas),
  });

  const onSubmit = (data: signUpSchemasType) => {
    console.log("data", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-6"
      >
        <div className="flex flex-col gap-10 items-center justify-center">
          <p className="text-4xl font-bold">Sign Up Form</p>
          <TextInputControlled
            label="User Name"
            isRequiredLabel
            name="userName"
            placeholder="Your User Name"
            variant="withWrapper"
          />
          <TextInputControlled
            label="User Email"
            type="number"
            name="email"
            placeholder="Your Email"
            variant="withWrapper"
          />
          <TextInputControlled
            label="User Password"
            isRequiredLabel
            type="password"
            name="userPassword"
            placeholder="Your Password"
            variant="withWrapper"
          />
          <TextInputControlled
            label="Confirm User Password"
            isRequiredLabel
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            variant="withWrapper"
          />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </FormProvider>
  );
}
