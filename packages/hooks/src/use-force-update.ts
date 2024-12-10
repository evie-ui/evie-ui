import { useState } from "react";

export const useForceUpdate = () => {
  const [, setV] = useState({});

  return {
    forceUpdate: () => setV({}),
  };
};
