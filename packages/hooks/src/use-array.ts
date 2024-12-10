import { useCallback, useState } from "react";

export const useArray = <T>(defaultValue = [] as T[]) => {
  const [value, setValue] = useState<T[]>(defaultValue);

  const set = useCallback((v: T[]) => {
    setValue(v);
  }, []);

  const append = useCallback((v: T[]) => insertAt(v.length - 1, v), []);

  const prepend = useCallback((v: T[]) => insertAt(0, v), []);

  const removeAt = useCallback((i: number) => {
    setValue((current) => {
      current.splice(i, 1);
      return [...current];
    });
  }, []);

  const remove = useCallback((cb: (v: T) => unknown) => {
    setValue((current) => {
      const newArray = current.filter((v) => !cb(v));
      return [...newArray];
    });
  }, []);

  const replaceAt = useCallback((i: number, v: T) => {
    setValue((current) => {
      current[i] = v;
      return [...current];
    });
  }, []);

  const move = useCallback((from: number, to: number) => {
    setValue((current) => {
      const v1 = current[from];
      current.splice(from, 1);
      current.splice(to, 0, v1);
      return [...current];
    });
  }, []);

  const insertAt = useCallback((i: number, v: T[]) => {
    setValue((current) => {
      current.splice(i, 0, ...v);
      return [...current];
    });
  }, []);

  const clear = useCallback(() => {
    setValue([]);
  }, []);

  return [value, { clear, set, append, prepend, move, remove, removeAt, replaceAt, insertAt }] as const;
};
