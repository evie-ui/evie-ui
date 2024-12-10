import { isNonNullable } from "@evie-ui/types";
import { ArrayHelpers } from "../../array";
import { getMonthsDaysNumber, getWeekDayIndex } from "../constants";
import { DayMonthYear } from "./day-month-year-class";
import { MonthYear } from "./month-year-class";

type MonthYearType = ReturnType<typeof MonthYear>;
type DayMonthYearType = ReturnType<typeof DayMonthYear>;

export const MonthYearDateHelpers = {
  today() {
    return MonthYear(new Date());
  },

  getBiggestDate(...dates: MonthYearType[]) {
    return dates.reduce((prev, curr) => (prev.is.after(curr) ? prev : curr));
  },

  getSmallestDate(...dates: MonthYearType[]) {
    return dates.reduce((prev, curr) => (prev.is.before(curr) ? prev : curr));
  },

  weeks(visibleDate: MonthYearType): Array<Array<number | null>> {
    const startDay = getWeekDayIndex(visibleDate.splitted);
    const monthDaysNumber = getMonthsDaysNumber(visibleDate.splitted.year)[
      visibleDate.splitted.month - 1
    ];
    const daysSizeArray: (number | null)[] =
      ArrayHelpers.createPlaceholder(monthDaysNumber);
    for (let i = 1; i < startDay; i++) daysSizeArray.unshift(null);
    return ArrayHelpers.chunk(daysSizeArray, { size: 7, fillRemaining: true });
  },

  filledWeeks(visibleDate: MonthYearType): Array<Array<DayMonthYearType>> {
    const previousMonth = visibleDate.subtract.months(1);
    const nextMonth = visibleDate.add.months(1);
    const previousMonthDaysNumber = getMonthsDaysNumber(
      previousMonth.splitted.year
    )[previousMonth.splitted.month - 1];

    return this.weeks(visibleDate).map((currentValue, index, array) => {
      const onlyCurrentMonthDays = currentValue
        .filter(isNonNullable)
        .map((day) => DayMonthYear({ ...visibleDate.splitted, day: day }));

      if (index === 0) {
        const monthVisibleDays = ArrayHelpers.createPlaceholder(
          7 - onlyCurrentMonthDays.length
        )
          .map((_, index) =>
            DayMonthYear({
              day: previousMonthDaysNumber - index,
              ...previousMonth.splitted,
            })
          )
          .reverse();
        monthVisibleDays.push(...onlyCurrentMonthDays);
        return monthVisibleDays;
      }

      if (index === array.length - 1) {
        const monthVisibleDays = ArrayHelpers.createPlaceholder(
          7 - onlyCurrentMonthDays.length
        ).map((_, index) =>
          DayMonthYear({
            day: index + 1,
            ...nextMonth.splitted,
          })
        );
        monthVisibleDays.unshift(...onlyCurrentMonthDays);
        return monthVisibleDays;
      }

      return onlyCurrentMonthDays;
    });
  },
};
