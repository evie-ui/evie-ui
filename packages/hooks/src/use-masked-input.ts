import { type Mask, MaskHelpers } from "@evie-ui/utils/mask";
import { useCallback } from "react";
import type {
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from "react-native";

export type UseMaskedInputProps = {
  mask: Mask;
  value: string | undefined;

  /**
   * Callback that is called when the text input's text changes.
   * @param masked Masked text
   * @param unmasked Unmasked text
   */
  onChangeText?: (masked: string, unmasked: string | undefined) => void;

  /** Character to be used as the "fill character" on the default placeholder */
  fillCharacter?: string;
};

export const useMaskedInput = (props: UseMaskedInputProps) => {
  const { value, mask, onChangeText, fillCharacter = "_" } = props;

  const handleKeyPress = useCallback(
    (newUnmaskedValue = "") =>
      (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        e.persist();

        const key = e.nativeEvent.key;
        if (key === "Enter") return;

        let text = `${newUnmaskedValue}${key}`;
        if (key === "Backspace") text = newUnmaskedValue.slice(0, -1);

        const { masked, unmasked, unmaskedMaxLength } = MaskHelpers.mask({
          text,
          mask,
          fillCharacter,
        });

        if (text.length > unmaskedMaxLength) return;

        onChangeText?.(masked, unmasked);
      },
    [mask, onChangeText, fillCharacter]
  );

  const { masked, unmasked, maskedMaxLength } = MaskHelpers.mask({
    text: value,
    mask,
    fillCharacter,
  });

  const unmaskedIsEmpty = unmasked === undefined || unmasked === "";

  return {
    value: { masked: unmaskedIsEmpty ? undefined : masked, unmasked },
    onKeyPress: handleKeyPress,
    maxLength: maskedMaxLength,
    placeholder: unmaskedIsEmpty ? masked : unmasked,
  };
};
