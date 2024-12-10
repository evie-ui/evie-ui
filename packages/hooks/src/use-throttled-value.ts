import { useEffect, useRef, useState } from "react";

export const useThrottledValue = <T>(value: T, interval = 500) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastUpdated = useRef<number | undefined>(undefined);

  useEffect(() => {
    const now = Date.now();

    if (lastUpdated.current && now >= lastUpdated.current + interval) {
      lastUpdated.current = now;
      setThrottledValue(value);
      return;
    }

    const id = setTimeout(() => {
      lastUpdated.current = now;
      setThrottledValue(value);
    }, interval);

    return () => clearTimeout(id);
  }, [value, interval]);

  return throttledValue;
};
