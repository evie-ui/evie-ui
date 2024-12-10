import { ArrayHelpers } from "@evie-ui/utils/array";
import { Fragment, useEffect, useRef } from "react";
import { Keyboard } from "react-native";
import { Pressable } from "../../pressable";
import { View } from "../../view";
import { BaseInput } from "../_base";
import { NumberInput } from "./number";
import { TextInput } from "./text";

type InputProps = Omit<
  React.ComponentProps<typeof TextInput>,
  "value" | "defaultValue"
>;
type NumberProps = InputProps & { type: "number" };
type TextProps = InputProps & { type: "text" };
type Props = (NumberProps | TextProps) & {
  value?: string;
  onChangeText?: (value: string) => void;
};

const PIN_LENGTH = 4;

export const PinCodeInput = (props: Props) => {
  const inputRef = useRef<React.ComponentRef<typeof TextInput>>(null);

  const Component = props.type === "number" ? NumberInput : TextInput;
  const placeholder = props.type === "number" ? "0" : "A";

  useEffect(() => {
    const keyboardDidHideSubscription = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        inputRef.current?.blur();
      }
    );

    return () => {
      keyboardDidHideSubscription?.remove();
    };
  }, []);

  return (
    <Fragment>
      <View flexDirection="row" gap="sm">
        <Pressable
          gap="sm"
          flexGrow={1}
          flexShrink={0}
          flexDirection="row"
          scaleDownAnimation="none"
          onPress={() => inputRef.current?.focus()}
        >
          {ArrayHelpers.createPlaceholder(PIN_LENGTH).map((_, index) => (
            <View flex={1} pointerEvents="none" key={index.toString()}>
              <BaseInput
                flex={0}
                readOnly
                textAlign="center"
                placeholder={placeholder}
                value={props.value?.at(index) ? "*" : undefined}
              />
            </View>
          ))}
        </Pressable>
      </View>

      <View opacity={0} pointerEvents="none" position="absolute" zIndex={-999}>
        <Component
          autoFocus
          ref={inputRef}
          maxLength={PIN_LENGTH}
          value={props.value}
          secureTextEntry
          autoComplete="one-time-code"
          onChangeText={(value) => {
            props.onChangeText?.(value?.toString() ?? "");
          }}
        />
      </View>
    </Fragment>
  );
};
