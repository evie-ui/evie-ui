"worklet";

export const StringHelpers = {
  decodeHtmlEntity: (str: string) => str.replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec)),

  pluralize: (
    count: number,
    props: {
      singular: string;
      plural: string;
    },
  ) => `${count} ${count === 1 ? props.singular : props.plural}`.trim(),

  CONSTANTS: {
    SPACE: " ",
    EMPTY: "",
    DOT_SEPARATOR: "•",
  },

  lowercase: <T extends string>(str: T) => str.toLowerCase() as Lowercase<T>,
  uppercase: <T extends string>(str: T) => str.toUpperCase() as Uppercase<T>,
  capitalize: <T extends string>(str: T) => (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>,

  camelToSnakeCase(str: string) {
    return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  },

  snakeToCamelCase(str: string) {
    return str
      .split("_")
      .map((s, i) => (i === 0 ? s : this.capitalize(s)))
      .join("");
  },
};
