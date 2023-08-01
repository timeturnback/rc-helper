export const inputToNumberOnly = (input: string) => {
  return input.replace(/[^0-9]/g, "");
};

export const inputToName = (input: string) => {
  return input.replace(/[^a-zA-Z]/g, "");
};
