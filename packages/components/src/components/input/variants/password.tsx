import { SvgVisibility } from "@evie-ui/icons/visibility";
import { SvgVisibilityOffFill } from "@evie-ui/icons/visibility-off-fill";
import { forwardRef, useState } from "react";
import { IconButton } from "../../icon-button";
import { TextInput } from "./text";

type Props = React.ComponentProps<typeof TextInput>;

export const PasswordInput = forwardRef<
  React.ComponentRef<typeof TextInput>,
  Props
>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextInput
      {...props}
      ref={ref}
      secureTextEntry={!showPassword}
      suffix={
        <IconButton
          px="none"
          py="none"
          h="auto"
          mr="sm"
          bgColor="transparent"
          onPress={() => setShowPassword((showPassword) => !showPassword)}
        >
          {showPassword ? <SvgVisibilityOffFill /> : <SvgVisibility />}
        </IconButton>
      }
    />
  );
});
