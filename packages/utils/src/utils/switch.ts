export const SwitchHelpers = {
  switch: <T>(value: () => T): T => value?.(),
};
