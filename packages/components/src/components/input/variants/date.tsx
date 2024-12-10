import { useMaskedInput } from "@evie-ui/hooks";
import { forwardRef } from "react";
import { TextInput } from "./text";

type Props = Omit<React.ComponentProps<typeof TextInput>, "onChangeText"> & {
  onChangeText?: (masked: string, unmasked: string | undefined) => void;
};

export const DateInput = forwardRef<React.ComponentRef<typeof TextInput>, Props>((props, ref) => {
  const {
    value: { masked, unmasked },
    onKeyPress,
    maxLength,
    placeholder,
  } = useMaskedInput({
    mask: [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/],
    value: props.value,
    onChangeText: props.onChangeText,
  });

  return (
    <TextInput
      {...props}
      ref={ref}
      value={masked}
      maxLength={maxLength}
      autoComplete="birthdate-day"
      keyboardType="decimal-pad"
      onChangeText={() => {}}
      placeholder={placeholder}
      onKeyPress={onKeyPress(unmasked)}
      selection={{ start: maxLength, end: maxLength }}
    />
  );
});
