export const onChange =
  ({ setterFunction, isBoolean = false }) =>
  ({ target: { value } }) =>
    setterFunction(isBoolean ? value !== true.toString() : value);
