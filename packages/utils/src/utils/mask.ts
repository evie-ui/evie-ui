type MaskItem = string | RegExp;
export type Mask = Array<MaskItem>;
type FormatWithMaskResult = {
  masked: string;
  unmasked: string | undefined;
  maskedMaxLength: number;
  unmaskedMaxLength: number;
};
type FormatWithMaskProps = {
  text?: string;
  mask: Mask;
  fillCharacter?: string;
};

export const MaskHelpers = {
  mask: (props: FormatWithMaskProps): FormatWithMaskResult => {
    const { text, mask, fillCharacter = "_" } = props;

    const unmaskedChars = text?.split("") ?? [];
    const maskedValue = mask.map((maskItem) => (typeof maskItem === "string" ? maskItem : fillCharacter));

    for (const char of unmaskedChars) {
      const index = maskedValue.findIndex((maskItem) => maskItem === fillCharacter);
      const maskItem = mask[index] as RegExp | undefined;
      if (maskItem?.test(char)) maskedValue[index] = char;
    }

    const maskedMaxLength = mask.length;
    const unmaskedMaxLength = mask.filter((maskItem) => typeof maskItem !== "string").length;

    return {
      masked: maskedValue.join(""),
      unmasked: props.text,
      maskedMaxLength,
      unmaskedMaxLength,
    };
  },
};
