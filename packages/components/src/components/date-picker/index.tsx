import type { DayMonthYearDate } from "@evie-ui/types";
import { View } from "../view";
import { DatePickerContext } from "./context";
import { DatePickerItem } from "./item";

type DatePickerProps = React.PropsWithChildren & {
  start?: DayMonthYearDate;
  end?: DayMonthYearDate;

  date: DayMonthYearDate | undefined;
  onDateChange: (value: DayMonthYearDate) => void;
};

export const DatePickerRoot = ({ date, onDateChange, end, start, children }: DatePickerProps) => {
  return (
    <View flexDirection="row">
      <DatePickerContext.Provider value={{ date, onDateChange, start, end }}>{children}</DatePickerContext.Provider>
    </View>
  );
};

export const DatePicker = {
  Root: DatePickerRoot,
  Item: DatePickerItem,
};
