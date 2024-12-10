// import { useContext } from "react";
// import { RadioGroupContext } from "../../../contexts/radio-group";
// import { Checkbox } from "../../checkbox";

// type Props = Omit<React.ComponentProps<typeof Checkbox>, "checked" | "onCheckedChange"> & {
//   value: string;
// };

// export const RadioGroupItem = (props: Props) => {
//   const { value, onValueChange, nullable } = useContext(RadioGroupContext);

//   return (
//     <Checkbox
//       {...props}
//       checked={value === props.value}
//       onCheckedChange={(checked) => {
//         if (nullable) return onValueChange?.(checked ? props.value : null);

//         const newValue = checked ? props.value : value;
//         if (newValue) onValueChange?.(newValue);
//       }}
//     />
//   );
// };
