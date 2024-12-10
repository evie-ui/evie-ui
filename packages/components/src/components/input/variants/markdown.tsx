import { forwardRef } from "react";
import { TextInput } from "./text";

type Props = React.ComponentProps<typeof TextInput>;

export const MarkdownInput = forwardRef<React.ComponentRef<typeof TextInput>, Props>((props, ref) => {
  return <TextInput {...props} ref={ref} multiline numberOfLines={2} />;
});
