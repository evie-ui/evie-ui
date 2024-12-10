import { useBackButton } from "@evie-ui/hooks";
import type React from "react";
import { Fragment, useCallback, useState } from "react";
import { Keyboard } from "react-native";
import { MultiStepContext } from "./_context";

type Props<T extends Record<string, React.FC>> = {
  steps: T;
  initialStep: keyof T;
  onBackwardImpossible?: () => void;
  onFinish?: (props: {
    back: () => void;
    navigateTo: (step: keyof T) => void;
  }) => void;
};

export const MultiStep = <T extends Record<string, React.FC>>(props: Props<T>) => {
  const [history, setHistory] = useState<(keyof T)[]>([props.initialStep]);

  const navigateTo = useCallback(
    (step: keyof T) => {
      const steps = props.steps;

      if (!step || !steps[step]) {
        console.warn(`Step "${String(step)}" not found`);
        return;
      }

      setHistory((history) => [...history, step]);
    },
    [props.steps],
  );

  const back = useCallback(() => {
    if (history.length === 1) return props.onBackwardImpossible?.();
    setHistory((history) => history.slice(0, -1));
  }, [history, props.onBackwardImpossible]);

  const finish = useCallback(() => {
    Keyboard.dismiss();

    props.onFinish?.({
      back,
      navigateTo,
    });
  }, [props.onFinish, navigateTo, back]);

  useBackButton(() => {
    // if (closeable)
    back();
    return true;
  });

  const lastHistoryItem = history.at(-1);
  const LastHistoryItemComponent = lastHistoryItem ? props.steps[lastHistoryItem] : () => null;
  const Component = !lastHistoryItem ? <Fragment /> : <LastHistoryItemComponent />;

  return <MultiStepContext.Provider value={{ finish, navigateTo, back }}>{Component}</MultiStepContext.Provider>;
};
