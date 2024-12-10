import { useMaskedInput } from "@evie-ui/hooks";
import { forwardRef } from "react";
import { TextInput } from "./text";

type Props = Omit<React.ComponentProps<typeof TextInput>, "onChangeText"> & {
  maskAutoComplete?: boolean;
  onChangeText?: (masked: string, unmasked: string | undefined) => void;
};

export const PhoneInput = forwardRef<React.ComponentRef<typeof TextInput>, Props>((props, ref) => {
  const {
    value: { masked, unmasked },
    maxLength,
    onKeyPress,
    placeholder,
  } = useMaskedInput({
    value: props.value,
    mask: ["(", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/],
    onChangeText: props.onChangeText,
  });

  return (
    <TextInput
      {...props}
      ref={ref}
      value={masked}
      autoComplete="tel"
      keyboardType="phone-pad"
      placeholder={placeholder}
      maxLength={maxLength}
      onChangeText={() => {}}
      onKeyPress={onKeyPress(unmasked)}
      selection={{ start: maxLength, end: maxLength }}
    />
  );
});
