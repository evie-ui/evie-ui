import type { DayMonthYearDate } from "@evie-ui/types";
import { createContext } from "react";

type Props = {
  start?: DayMonthYearDate;
  end?: DayMonthYearDate;

  date: DayMonthYearDate | undefined;
  onDateChange: (value: DayMonthYearDate) => void;
};

export const DatePickerContext = createContext<Props>({} as Props);
