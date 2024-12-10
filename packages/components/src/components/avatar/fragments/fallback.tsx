import { useContext } from "react";
import { AvatarContext } from "../_context";

type Props = React.PropsWithChildren;

export const AvatarFallback = (props: Props) => {
  const { currentState } = useContext(AvatarContext);
  if (currentState !== "fallback") return null;
  return props.children;
};
