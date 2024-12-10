import { SuspenseError } from "@evie-ui/utils/errors";
import { useForceUpdate } from "./use-force-update";

/* Cache to store fetch result, which can be a promise, error or data */
const cache = new Map<string, { promise?: Promise<unknown>; data?: unknown; error?: unknown }>();

/* Suspends the rendering by throwing a promise. Returns the result (data or error) when thrown promise settles */
export const useSuspense = <P extends Promise<unknown>>(
  key: string,
  awaited: () => P,
  // deps: unknown[] = [],
): [Awaited<P>, { retry: () => void }] => {
  const { forceUpdate } = useForceUpdate();
  const { promise, data, error } = cache.get(key) ?? {};

  const retry = () => {
    cache.delete(key);
    forceUpdate();
  };

  if (promise) throw promise;
  if (error) throw new SuspenseError(error as Error, retry);
  if (data) return [data as Awaited<P>, { retry }] as const;

  /** aka suspender */
  const promiseThen = awaited()
    .then((data) => {
      cache.set(key, { data });
    })
    .catch((error) => {
      cache.set(key, { error });
    });

  cache.set(key, { promise: promiseThen });
  throw promiseThen;
};
