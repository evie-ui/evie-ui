import { useState } from "react";

export const useThrowInsideHooks = () => {
  const [_, setV] = useState(0);

  return {
    throwError: <Err extends Error>(error: Err) => {
      setV(() => {
        throw error;
      });
    },
  };
};
