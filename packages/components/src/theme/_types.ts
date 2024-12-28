import type {
  FontFamilyWeight,
  LiteralUnion,
  NamedFontFamilyWeight,
  Percentage,
} from "@evie-ui/types";
import type { Hex } from "@evie-ui/utils/color";
import type {
  AccordionContentProps,
  AccordionIndicatorProps,
  AccordionItemProps,
  AccordionRootProps,
  AccordionTriggerProps,
} from "../components/accordion/types";
import type {
  ProgressBarIndicatorProps,
  ProgressBarRootProps,
} from "../components/progress-bar/_types";
import type {
  ProgressCircleIndicatorProps,
  ProgressCircleRootProps,
} from "../components/progress-circle/_types";
import type {
  StepperNegativeProps,
  StepperPositiveProps,
  StepperRootProps,
  StepperValueProps,
} from "../components/stepper/types";
import type {
  SwitchIndicatorProps,
  SwitchRootProps,
} from "../components/switch/types";
import type {
  Colors,
  FontFamilies,
  FontSizes,
  Radii,
  Spacings,
} from "../extend-theme";

export type DefaultProps<Props> = Omit<Props, "children">;

export interface Theme {
  name: string;
  colors: Colors;
  fontFamily: FontFamilies;
  fontSize: FontSizes;
  spacing: Spacings;
  radius: Radii;
}

export type ThemeWithGetToken = {
  getName: () => string;
  getColor: <Token extends LiteralUnion<keyof Colors> | null | undefined>(
    token: Token
  ) => Token extends string ? Hex : string | undefined;

  getSpacing: <
    Token extends LiteralUnion<keyof Spacings> | Percentage | null | undefined,
  >(
    token: Token
  ) => number | undefined;

  getPosition: <
    Token extends LiteralUnion<keyof Spacings> | Percentage | null | undefined,
  >(
    token: Token
  ) => Percentage | number | undefined;

  getRadius: <
    Token extends LiteralUnion<keyof Radii> | "none" | null | undefined,
  >(
    token: Token
  ) => Token extends number ? number : number | undefined;

  getFontSize: <
    Token extends LiteralUnion<keyof FontSizes> | Percentage | null | undefined,
  >(
    token: Token
  ) => Token extends number ? number : number | undefined;

  getFontWeight: (
    token: keyof NamedFontFamilyWeight | null | undefined
  ) => keyof FontFamilyWeight | undefined;

  getFontFamily: <
    Token extends LiteralUnion<keyof FontFamilies> | null | undefined,
  >(
    token: Token,
    fontWeight: keyof FontFamilies[keyof FontFamilies]
  ) => Token extends string ? string : string | undefined;
};

export type ThemeComponents = Partial<{
  Page: {
    Root: {};
    Header: {};
    BackButton: {};
    TitleContainer: {};
    Title: {};
    Subtitle: {};
    Content: {};
    List: {};
    ScrollView: {};
    Footer: {};
  };

  Modal: {
    Root: {};
    Header: {};
    BackButton: {};
    TitleContainer: {};
    Title: {};
    Subtitle: {};
    CloseButton: {};
    Content: {};
    List: {};
    ScrollView: {};
    Footer: {};
  };

  Stepper: {
    Root: Partial<StepperRootProps>;
    Negative: Partial<StepperNegativeProps>;
    Value: Partial<StepperValueProps>;
    Positive: Partial<StepperPositiveProps>;
  };

  Accordion: {
    Root: Partial<AccordionRootProps>;
    Item: Partial<Omit<AccordionItemProps, "value">>;
    Trigger: Partial<AccordionTriggerProps>;
    Content: Partial<AccordionContentProps>;
    Indicator: Partial<AccordionIndicatorProps>;
  };

  Collapsible: {
    Root: {};
    Header: {};
    Content: {};
    Indicator: {};
  };

  Avatar: {
    Root: {};
    Image: {};
    Fallback: {};
  };

  Card: {
    Root: {};
    Cover: {};
    Header: {};
    Title: {};
    Subtitle: {};
    Content: {};
    Footer: {};
    Background: {};
  };

  Select: {
    Root: {};
    Item: {};
  };

  FormControl: {
    Root: {};
    Label: {};
    Input: {};
    Error: {};
    Helper: {};
  };

  ProgressBar: {
    Root: Partial<ProgressBarRootProps>;
    Indicator: Partial<ProgressBarIndicatorProps>;
  };

  ProgressCircle: {
    Root: Partial<ProgressCircleRootProps>;
    Indicator: Partial<ProgressCircleIndicatorProps>;
  };

  ToggleGroup: {
    Root: {};
    Item: {};
  };

  Section: {
    Root: {};
    Header: {};
    TitleContainer: {};
    Title: {};
    Subtitle: {};
    Action: {};
    Content: {};
    Footer: {};
  };

  Switch: (props: { state: "checked" | "unchecked" }) => {
    Root: Partial<SwitchRootProps>;
    Indicator: Partial<SwitchIndicatorProps>;
  };

  Grid: {
    Row: {};
    Column: {};
  };

  Slider: {
    Root: {};
    Indicator: {};
  };

  Chip: {};
  FlatList: {};
  IconButton: {};
  TextButton: {};
  Image: {};
  Link: {};
  MultiStep: {};
  Pressable: {};
  ScrollView: {};
  Separator: {};
  StatusBar: {};
  Text: {};
  View: {};
  Input: {};
  MagicModal: {};
}>;
