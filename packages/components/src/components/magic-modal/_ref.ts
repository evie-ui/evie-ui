import { createRef } from "react";

export type IModal = {
  show: typeof show;
  hide: typeof hide;
  lock: () => void;
  unlock: () => void;
};

export const magicModalRef = createRef<IModal>();

const show = async <Return, T extends Record<string, unknown> = Record<string, unknown>>(
  component: React.ComponentType<T>,
  props?: { closeable?: boolean },
): Promise<Return | undefined> => {
  return magicModalRef.current?.show?.(component, props);
};

const hide = async (returns?: unknown): Promise<void> => {
  return magicModalRef.current?.hide(returns);
};

export const magicModal: IModal = {
  show,
  hide,
  lock: () => magicModalRef.current?.lock(),
  unlock: () => magicModalRef.current?.unlock(),
};
