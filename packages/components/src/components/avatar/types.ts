import type { Image } from "../image";
import type { View } from "../view";
import type { AvatarContext } from "./_context";

export type AvatarCurrentState = React.ContextType<
  typeof AvatarContext
>["currentState"];

export type AvatarRootProps = React.ComponentProps<typeof View>;
export type AvatarFallbackProps = React.ComponentProps<typeof View>;
export type AvatarImageProps = React.ComponentProps<typeof Image>;
