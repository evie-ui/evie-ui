import type { TODO } from "@evie-ui/types";
import { createContext, useContext, useRef } from "react";

export const PubSubProvider = ({ children }: { children: React.ReactNode }) => {
  const subscriptions = useRef<Record<string, ((message: TODO) => void)[]>>({});

  const subscribe = (channel: string, handler: (message: TODO) => void): (() => void) => {
    subscriptions.current[channel] = [...(subscriptions.current?.[channel] ?? []), handler];
    return () => unsubscribe(channel, handler);
  };

  const unsubscribe = (channel: string, handler: (message: TODO) => void) => {
    subscriptions.current[channel] = subscriptions.current?.[channel]?.filter((h) => h !== handler) ?? [];
  };

  const publish = (channel: string, message: TODO) => {
    const handlers = subscriptions.current?.[channel] ?? [];
    for (const handler of handlers) handler(message);
  };

  return (
    <PubSubContext.Provider
      value={{
        subscribe,
        unsubscribe,
        publish,
      }}
    >
      {children}
    </PubSubContext.Provider>
  );
};

const PubSubContext = createContext<{
  subscribe: (channel: string, handler: (message: TODO) => void) => () => void;
  unsubscribe: (channel: string, handler: (message: TODO) => void) => void;
  publish: (channel: string, message: TODO) => void;
}>({
  subscribe: () => () => {},
  unsubscribe: () => {},
  publish: () => {},
});

export const usePubSub = () => {
  const { publish: _publish, subscribe: _subscribe, unsubscribe: _unsubscribe } = useContext(PubSubContext);

  const subscribe =
    (key: string) =>
    <Return,>(handler: (message: Return) => void) =>
      _subscribe(key, handler);

  const unsubscribe =
    (key: string) =>
    <Return,>(handler: (message: Return) => void) =>
      _unsubscribe(key, handler);

  const publish =
    (key: string) =>
    <Return,>(message: Return) =>
      _publish(key, message);

  return { publish, subscribe, unsubscribe };
};

export const usePubSubUniqueKey = <Return,>(key: string) => {
  const { publish: _publish, subscribe: _subscribe, unsubscribe: _unsubscribe } = usePubSub();

  const subscribe = _subscribe(key)<Return>;
  const unsubscribe = _unsubscribe(key)<Return>;
  const publish = _publish(key)<Return>;

  return { publish, subscribe, unsubscribe };
};
