/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx, { ClassValue } from "clsx";
import { FieldElement } from "react-hook-form";
import { twMerge } from "tailwind-merge";

export const isNullOrUndefined = (value: unknown): value is null | undefined =>
  value == null;

export const isDateObject = (value: unknown): value is Date =>
  value instanceof Date;

export const isObjectType = (value: unknown) => typeof value === "object";

export const isObject = <T extends object>(value: unknown): value is T =>
  !isNullOrUndefined(value) &&
  !Array.isArray(value) &&
  isObjectType(value) &&
  !isDateObject(value);

export const isNumber = (value: unknown): value is number =>
  typeof value == "number";

export function removeUndefined<T>(obj: T): T {
  if (!isObject(obj)) {
    return obj;
  }
  const newObj: any = {};

  Object.entries(obj).forEach(([key, value]) => {
    if (value !== undefined) {
      newObj[key] = value;
    }
  });

  return newObj as T;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isCheckBoxInput = (
  element: FieldElement
): element is HTMLInputElement => element.type === "checkbox";

export function getMessageError(error?: any) {
  if (error === undefined && typeof error != "object") {
    return "";
  }
  if (
    typeof error == "object" &&
    "message" in error &&
    typeof error.message == "string"
  ) {
    return error["message"];
  }
  let message = "";

  for (const key in error) {
    if (message) {
      break;
    }
    message = getMessageError(error[key]);
  }

  return message;
}
