import { isCheckBoxInput, isObject } from "./common";

type Event = { target: any };

export default function getEventValue(event: unknown) {
  return isObject(event) && (event as Event).target
    ? isCheckBoxInput((event as Event).target)
      ? (event as Event).target.checked
      : (event as Event).target.value
    : event;
}
