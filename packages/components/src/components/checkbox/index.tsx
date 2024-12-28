// import { View } from "react-native";
// import { useTheme } from "@evie-ui/hooks";
// import { Icon } from "../icon";
// import { Pressable } from "../pressable";
// import { Text } from "../text";

// type Props = {
//   title: string;
//   description?: string;
//   checked: boolean;
//   disabled?: boolean;
//   onCheckedChange: (checked: boolean) => void;
//   icon?: React.JSX.Element;
//   style?: React.ComponentProps<typeof Pressable>["style"];
// };

// export const Checkbox = (props: Props) => {
//   const { checked, onCheckedChange, description, disabled, title, style, icon } = props;
//   const { theme } = useTheme();

//   const buttonBackgroundColor = checked
//     ? theme.components.Button.Soft.backgroundColor
//     : theme.colors.surfaceContainerLow;

//   const rightIconColor = theme.components.Button.Soft.color;

//   return (
//     <Pressable
//       disabled={disabled}
//       onPress={() => onCheckedChange?.(!checked)}
//       style={[
//         {
//           paddingVertical: 24,
//           alignItems: "center",
//           flexDirection: "row",
//           paddingHorizontal: 24,
//           justifyContent: "space-between",
//           backgroundColor: buttonBackgroundColor,
//           borderRadius: theme.radius.medium,
//         },
//         style,
//       ]}
//     >
//       <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 16, flex: 1 }}>
//         {icon && <Icon color={theme.colors.onBackgroundColored}>{icon}</Icon>}

//         <View style={{ flex: 1, gap: 2 }}>
//           <Text style={{ fontWeight: "semibold" }}>{title}</Text>

//           {description && (
//             <Text
//               variant="caption"
//               style={[
//                 { fontSize: 14, color: "gray" },
//                 checked && { opacity: 0.75, color: theme.components.Button.Soft.color },
//               ]}
//             >
//               {description}
//             </Text>
//           )}
//         </View>
//       </View>

//       {checked && (
//         <View style={{ width: 28, alignItems: "flex-end" }}>
//           <Icon color={rightIconColor}>
//             <SvgCheckCircleFill />
//           </Icon>
//         </View>
//       )}
//     </Pressable>
//   );
// };
