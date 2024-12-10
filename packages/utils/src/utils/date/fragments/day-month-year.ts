import { ArrayHelpers } from "../../array";
import { DayMonthYear } from "./day-month-year-class";

type DayMonthYearType = ReturnType<typeof DayMonthYear>;

export const DayMonthYearDateHelpers = {
  today() {
    return DayMonthYear(new Date());
  },

  getBiggestDate(...dates: DayMonthYearType[]) {
    return dates.reduce((prev, curr) => (prev.is.after(curr) ? prev : curr));
  },

  getSmallestDate(...dates: DayMonthYearType[]) {
    return dates.reduce((prev, curr) => (prev.is.before(curr) ? prev : curr));
  },

  group(dates: DayMonthYearType[]): Array<Array<DayMonthYearType>> {
    return dates.reduce(
      (accumulator, currentDate) => {
        const previousDate = accumulator.at(-1);

        if (previousDate) {
          const difference = currentDate.difference(this.getBiggestDate(...previousDate)).day;

          if (difference === 1) {
            previousDate.push(currentDate);
            return accumulator;
          }
        }

        accumulator.push([currentDate]);
        return accumulator;
      },
      [] as Array<Array<DayMonthYearType>>,
    );
  },

  getDifferenceInDays(thisDate: DayMonthYearType, dateToCompare: DayMonthYearType): number {
    if (!dateToCompare) throw new Error("dateToCompare cannot be null or undefined");

    const { day: day1, month: month1, year: year1 } = thisDate.splitted;
    const { day: day2, month: month2, year: year2 } = dateToCompare.splitted;

    return Math.round(Math.abs((Date.UTC(year2, month2 - 1, day2) - Date.UTC(year1, month1 - 1, day1)) / 86400000));
  },

  getDaysBetween(date1: DayMonthYearType, date2: DayMonthYearType): DayMonthYearType[] {
    const dates: DayMonthYearType[] = [];
    const difference = this.getDifferenceInDays(date1, date2);

    if (date1.is.before(date2)) {
      for (let i = 0; i <= difference; i++) dates.push(date1.add.days(i));
    } else {
      for (let i = difference; i >= 0; i--) dates.push(date1.subtract.days(i));
    }

    return dates;
  },

  getConsecutiveDays(date: DayMonthYearType, quantity: number) {
    const finalQuantity = quantity % 2 === 0 ? quantity - 1 : quantity;
    const eachSideQuantity = (finalQuantity - 1) / 2;

    const placeholder = ArrayHelpers.createPlaceholder(eachSideQuantity);

    const before = placeholder.reduce<DayMonthYearType[]>((acc, _) => {
      acc.unshift((acc.at(0) ?? date).subtract.days(1));
      return acc;
    }, []);

    const after = placeholder.reduce<DayMonthYearType[]>((acc, _) => {
      acc.push((acc.at(-1) ?? date).add.days(1));
      return acc;
    }, []);

    return [...before, date, ...after];
  },
};
