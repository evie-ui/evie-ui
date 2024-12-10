import type { DayMonthYearDate, MonthYearDate } from "@evie-ui/types";

export const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
export const DAYS_LEAP = DAYS.map((day) => (day === 28 ? day + 1 : day));
export const DAYS_OF_THE_WEEK = [
  "DOM",
  "SEG",
  "TER",
  "QUA",
  "QUI",
  "SEX",
  "SÁB",
];
export const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export const isLeapYear = (year: number) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
export const getDaysOfWeek = () => DAYS_OF_THE_WEEK;
export const getMonthsNames = () => MONTHS;
export const getMonthsDaysNumber = (year: number) =>
  isLeapYear(year) ? DAYS_LEAP : DAYS;

export const getWeekDayIndex = (props: MonthYearDate) => {
  return new Date(props.year, props.month - 1, 1).getDay() + 1;
};

export const getSplittedToday = (): DayMonthYearDate => {
  return {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  };
};

export const isMonthYearDate = (
  date: DayMonthYearDate | MonthYearDate
): date is MonthYearDate =>
  "month" in date && "year" in date && !("day" in date);

export const isDayMonthYearDate = (
  date: DayMonthYearDate | MonthYearDate
): date is DayMonthYearDate =>
  "day" in date && "month" in date && "year" in date;
