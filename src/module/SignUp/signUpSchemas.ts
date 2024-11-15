import { z } from "zod";

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (
    issue.code === z.ZodIssueCode.invalid_type &&
    issue.expected === "string"
  ) {
    return { message: "invalid type" };
  }
  if (issue.code === z.ZodIssueCode.too_small) {
    return { message: "too small" };
  }
  if (issue.code === z.ZodIssueCode.custom) {
    return { message: "custom error" };
  }

  return { message: ctx.defaultError };
};

z.setErrorMap(customErrorMap);

export const signUpSchemas = z.object({
  userName: z.string(),
  email: z.string(),
  userPassword: z.string(),
  confirmPassword: z.string(),
});

export type signUpSchemasType = z.infer<typeof signUpSchemas>;
