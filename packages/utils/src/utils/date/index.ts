import { getDaysOfWeek, getMonthsDaysNumber, getMonthsNames } from "./constants";
import { DayMonthYearDateHelpers } from "./fragments/day-month-year";
import { MonthYearDateHelpers } from "./fragments/month-year";

export const DateHelpers = {
  MonthYear: MonthYearDateHelpers,
  DayMonthYear: DayMonthYearDateHelpers,
  getDaysOfWeek,
  getMonthsNames,
  getMonthsDaysNumber,
};

export { DayMonthYear } from "./fragments/day-month-year-class";
export { MonthYear } from "./fragments/month-year-class";
