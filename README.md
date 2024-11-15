# Customizing Errors with ZodErrorMap

This project demonstrates how to use [Zod](https://zod.dev/), a TypeScript-first schema validation library, to create custom error messages using `ZodErrorMap`. With `ZodErrorMap`, you can centralize and customize validation errors, making them user-friendly, context-aware, and even localized.

## Table of Contents

- [Introduction](#introduction)
- [Why Customize Errors with ZodErrorMap?](#why-customize-errors-with-zoderrormap)
- [Setting Up Project](#setting-up-project)
- [Basic Customization](#basic-customization)
- [Advanced Customization](#advanced-customization)
- [Best Practices](#best-practices)

---

## Introduction

Zod is a schema validation library designed for TypeScript that provides runtime type-checking. `ZodErrorMap` is a feature within Zod that enables you to customize error messages globally, helping to streamline and simplify error handling across your application.

## Why Customize Errors with ZodErrorMap?

Customizing error messages provides several benefits:

1. **Consistency**: Centralize error messages to maintain consistent language and tone across your app.
2. **Localization**: Easily localize error messages for multilingual applications.
3. **Improved User Experience**: Informative and context-sensitive error messages help guide users, reducing frustration and improving usability.

## Setting Up Project

Follow these steps to set up a custom `ZodErrorMap` in `signUpSchemas.ts`:

1. **Install Zod**:
   ```bash
   npm i zod
   ```
2. **Install React Hook Form**:
   ```bash
   npm i react-hook-form
   ```
3. **Install Resolver**:
   ```bash
   npm i @hookform/resolvers
   ```
4. **Other dependencies**:
   ```bash
   npm i clsx
   npm i lucide-react
   npm i tailwind-merge
   npm i querystring-es3
   npm i @radix-ui/themes
   npm i class-variance-authority
   ```

## Basic Customization

- [`.refine(validator: (data:T)=>any, params?: RefineParams)`](https://zod.dev/?id=refine)

```typescript
import { ZodErrorMap, z } from "zod";

const signUpSchemas = z.object({
  userName: z.string().refine((val) => val.length <= 255, {
    message: "String can't be more than 255 characters",
  }),
});
```

- [`.superRefine`](https://zod.dev/?id=superrefine)

```typescript
import { ZodErrorMap, z } from "zod";

const signUpSchemas = z.object({
  userName: z.string().superRefine((val, ctx) => {
    if (val.length > 3) {
      ctx.addIssue({
        code: z.ZodIssueCode.too_big,
        maximum: 3,
        type: "string",
        inclusive: true,
        message: "Too many items 😡",
      });
    }
  }),
});
```

## Advanced Customization

For more complex error handling, [`ZodErrorMap`](https://zod.dev/ERROR_HANDLING?id=customizing-errors-with-zoderrormap) allows you to use the `issue` and `context` parameters to create dynamic error messages based on the specific field name or additional conditions.

```typescript
import { ZodErrorMap, z } from "zod";

const customErrorMap: ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.too_small) {
    return { message: "Your password is too short!" };
  }

  if (issue.code === z.ZodIssueCode.custom) {
    return { message: `${(issue.params || {}).email}` };
  }

  //return default error message in Zod
  return { message: ctx.defaultError };
};

//set global error map
z.setErrorMap(customErrorMap);

export const signUpSchemas = z.object({
  userName: z.string({ errorMap: customErrorMap }).superRefine((val, ctx) => {
    if (val.length < 6) {
      ctx.addIssue({
        code: "too_small",
        inclusive: true,
        minimum: 6,
        type: "string",
      });
    }
  }),
  email: z.string({ errorMap: customErrorMap }).superRefine((val, ctx) => {
    if (!val) {
      ctx.addIssue({
        code: "custom",
        params: { email: "include_email" },
      });
    }
  }),
});
```

## Best Practices

1. **Be Concise and Informative**: Error messages should be brief yet specific.
2. **Avoid Technical Jargon**: Use language that is easy for end-users to understand.
3. **Focus on Solutions**: Guide users on how to correct their input.
4. **Test for Accessibility**: Ensure messages are accessible for screen readers and other assistive technologies.
