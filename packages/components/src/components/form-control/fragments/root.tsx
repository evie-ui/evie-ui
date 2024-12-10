import { View } from "../../view";
import { FormControlContext } from "../_context";

type Props = React.ComponentProps<typeof View> & {
  invalid?: string | (() => string);
  disabled?: boolean;
  loading?: boolean;
};
export const FormControlRoot = (props: Props) => {
  const { disabled = false, invalid, loading = false, ...rest } = props;

  return (
    <FormControlContext.Provider
      value={{
        disabled,
        invalid: typeof invalid === "function" ? invalid() : invalid,
        loading,
      }}
    >
      <View {...rest}>{props.children}</View>
    </FormControlContext.Provider>
  );
};
