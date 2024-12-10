import type { DayMonthYear, MonthYear } from "@evie-ui/utils/date";

export type CalendarProps = {
  visibleDate: ReturnType<typeof MonthYear>;
  selectedDate?: ReturnType<typeof DayMonthYear>;
  onChangeSelectedDate?: (date: ReturnType<typeof DayMonthYear>) => void;
  fillEmptySpaces?: boolean;

  minDate?: ReturnType<typeof DayMonthYear>;
  maxDate?: ReturnType<typeof DayMonthYear>;
};
