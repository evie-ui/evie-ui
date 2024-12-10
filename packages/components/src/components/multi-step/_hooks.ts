import { useContext } from "react";
import { MultiStepContext } from "./_context";

export const useMultiStep = <T extends string>() => {
  const { navigateTo, ...props } = useContext(MultiStepContext);

  return {
    ...props,
    navigateTo: navigateTo as (step: T) => void,
  };
};
