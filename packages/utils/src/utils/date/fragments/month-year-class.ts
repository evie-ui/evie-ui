import type { DayMonthYearDate, MonthYearDate } from "@evie-ui/types";
import { NumberHelpers } from "../../number";
import { isDayMonthYearDate, isLeapYear, isMonthYearDate } from "../constants";

export function MonthYear(
  date: ConstructorParameters<typeof MonthYearClass>[0]
): MonthYearClass {
  return new MonthYearClass(date);
}

export class MonthYearClass {
  private _splitted: MonthYearDate;

  get splitted() {
    return this._splitted;
  }

  constructor(
    date: Date | string | DayMonthYearDate | MonthYearDate | MonthYearClass
  ) {
    let splittedDate: MonthYearDate | undefined;

    if (typeof date === "string") {
      const onlyDate = date.replaceAll("T", " ").split(" ")[0];
      const splittedDateBySlash = onlyDate.replaceAll("-", "/").split("/");
      const [part1, part2, part3] = splittedDateBySlash;

      if (part3.length === 4) {
        splittedDate = { month: Number(part2), year: Number(part3) };
      } else if (part1.length === 4) {
        splittedDate = { month: Number(part2), year: Number(part1) };
      }
    } else if (date instanceof Date) {
      splittedDate = { month: date.getMonth() + 1, year: date.getFullYear() };
    } else if (date instanceof MonthYearClass) {
      splittedDate = date.splitted;
    } else if (isMonthYearDate(date)) {
      splittedDate = { month: date.month, year: date.year };
    } else if (isDayMonthYearDate(date)) {
      splittedDate = date;
    }

    if (!splittedDate) throw new Error("Invalid date");
    this._splitted = splittedDate;
  }

  toString(format: "mm/yyyy" = "mm/yyyy"): string {
    const { month, year } = this.splitted;
    return `${NumberHelpers.ensure2Digit(month)}/${year}`;
  }

  get add() {
    return {
      months: (months: number): MonthYearClass => {
        return Array.from({ length: months }).reduce<MonthYearClass>(
          (oldValue) => oldValue._getNextMonth(),
          this
        );
      },

      years: (years: number): MonthYearClass => {
        return new MonthYearClass({
          month: this.splitted.month,
          year: this.splitted.year + years,
        });
      },
    };
  }

  get subtract() {
    return {
      months: (months: number): MonthYearClass => {
        return Array.from({ length: months }).reduce<MonthYearClass>(
          (oldValue) => oldValue._getPreviousMonth(),
          this
        );
      },

      years: (years: number): MonthYearClass => {
        return new MonthYearClass({
          month: this.splitted.month,
          year: this.splitted.year - years,
        });
      },
    };
  }

  difference(dateToCompare: MonthYearClass): MonthYearDate {
    const { month, year } = this.splitted;
    const { month: monthToCompare, year: yearToCompare } =
      dateToCompare.splitted;

    const monthsDifference =
      (yearToCompare - year) * 12 + (monthToCompare - month);

    return {
      month: Math.abs(monthsDifference) % 12,
      year: Math.floor(Math.abs(monthsDifference) / 12),
    };
  }

  get is() {
    return {
      leapYear: () => {
        return isLeapYear(this.splitted.year);
      },
      between: (min: MonthYearClass, max: MonthYearClass): boolean => {
        return this.is.after(min) && this.is.before(max);
      },
      equals: (dateToCompare: MonthYearClass): boolean => {
        return (
          this.splitted.month === dateToCompare.splitted.month &&
          this.splitted.year === dateToCompare.splitted.year
        );
      },
      after: (dateToCompare: MonthYearClass): boolean => {
        if (this.splitted.year > dateToCompare.splitted.year) return true;
        if (
          this.splitted.year === dateToCompare.splitted.year &&
          this.splitted.month > dateToCompare.splitted.month
        ) {
          return true;
        }
        return false;
      },
      before: (dateToCompare: MonthYearClass): boolean => {
        if (this.splitted.year < dateToCompare.splitted.year) return true;
        if (
          this.splitted.year === dateToCompare.splitted.year &&
          this.splitted.month < dateToCompare.splitted.month
        ) {
          return true;
        }

        return false;
      },
    };
  }

  private _getNextMonth(): MonthYearClass {
    if (this.splitted.month === 12)
      return new MonthYearClass({ month: 1, year: this.splitted.year + 1 });
    return new MonthYearClass({
      month: this.splitted.month + 1,
      year: this.splitted.year,
    });
  }

  private _getPreviousMonth(): MonthYearClass {
    if (this.splitted.month === 1)
      return new MonthYearClass({ month: 12, year: this.splitted.year - 1 });
    return new MonthYearClass({
      month: this.splitted.month - 1,
      year: this.splitted.year,
    });
  }
}
