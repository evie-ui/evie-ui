import type { DDMMYYYY, DayMonthYearDate, MonthYearDate } from "@evie-ui/types";
import { NumberHelpers } from "../../number";
import {
  getMonthsDaysNumber,
  isDayMonthYearDate,
  isMonthYearDate,
} from "../constants";
import { MonthYear, MonthYearClass } from "./month-year-class";

export function DayMonthYear(
  date: ConstructorParameters<typeof DayMonthYearClass>[0]
): DayMonthYearClass {
  return new DayMonthYearClass(date);
}

export class DayMonthYearClass {
  private _splitted: DayMonthYearDate;

  get splitted() {
    return this._splitted;
  }

  constructor(
    date:
      | Date
      | string
      | DayMonthYearDate
      | MonthYearDate
      | MonthYearClass
      | DayMonthYearClass
  ) {
    let splittedDate: DayMonthYearDate | undefined;

    if (typeof date === "string") {
      const onlyDate = date.replaceAll("T", " ").split(" ")[0];
      const splittedDateBySlash = onlyDate.replaceAll("-", "/").split("/");
      const [part1, part2, part3] = splittedDateBySlash;

      const day = Number(part1);
      const month = Number(part2);
      const year = Number(part3);

      splittedDate = {
        day: NumberHelpers.clamp(day, {
          min: 1,
          max: getMonthsDaysNumber(year)[month - 1],
        }),
        month,
        year,
      };
    } else if (date instanceof Date) {
      splittedDate = {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
      };
    } else if (date instanceof MonthYearClass) {
      splittedDate = {
        day: 1,
        month: date.splitted.month,
        year: date.splitted.year,
      };
    } else if (date instanceof DayMonthYearClass) {
      splittedDate = {
        ...date.splitted,
        day: NumberHelpers.clamp(date.splitted.day, {
          min: 1,
          max: getMonthsDaysNumber(date.splitted.year)[date.splitted.month - 1],
        }),
      };
    } else {
      if (isMonthYearDate(date)) splittedDate = { ...date, day: 1 };

      if (isDayMonthYearDate(date)) {
        splittedDate = {
          ...date,
          day: NumberHelpers.clamp(date.day, {
            min: 1,
            max: getMonthsDaysNumber(date.year)[date.month - 1],
          }),
        };
      }
    }

    if (!splittedDate) throw new Error("Invalid date");
    this._splitted = splittedDate;
  }

  get convert() {
    return {
      toMonthYear: () =>
        MonthYear({ month: this.splitted.month, year: this.splitted.year }),
    };
  }

  difference(dateToCompare: DayMonthYearClass) {
    const monthYearDifference = MonthYear(
      dateToCompare.convert.toMonthYear()
    ).difference(this.convert.toMonthYear());
    if (this.is.equals(dateToCompare))
      return { day: 0, ...monthYearDifference };

    let ref = DayMonthYear(this);

    if (this.is.before(dateToCompare)) {
      ref = this.add
        .years(monthYearDifference.year)
        .add.months(monthYearDifference.month);
    } else if (this.is.after(dateToCompare)) {
      ref = this.subtract
        .years(monthYearDifference.year)
        .subtract.months(monthYearDifference.month);
    }

    console.log();
    console.log("this", this.toString());
    console.log("ref", ref.toString());
    console.log("dateToCompare", dateToCompare.toString());
    console.log();

    return {
      day: NumberHelpers.clamp(ref.splitted.day, { min: 0 }),
      ...monthYearDifference,
    };
  }

  toMonthYear() {
    return MonthYear({ month: this.splitted.month, year: this.splitted.year });
  }

  toString(format: "dd/mm/yyyy" = "dd/mm/yyyy") {
    const { day, month, year } = this.splitted;
    return `${NumberHelpers.ensure2Digit(day)}/${NumberHelpers.ensure2Digit(month)}/${year}` as DDMMYYYY;
  }

  get add() {
    return {
      days: (days: number): DayMonthYearClass => {
        return Array.from({ length: days }).reduce<DayMonthYearClass>(
          (oldValue) => oldValue.getNextDay(),
          this
        );
      },

      months: (months: number): DayMonthYearClass => {
        const dateWithAddedMonths = MonthYear(this.splitted).add.months(months);

        return DayMonthYear({
          ...dateWithAddedMonths.splitted,
          day: NumberHelpers.clamp(this.splitted.day, {
            min: 1,
            max: getMonthsDaysNumber(dateWithAddedMonths.splitted.year)[
              dateWithAddedMonths.splitted.month - 1
            ],
          }),
        });
      },

      years: (years: number): DayMonthYearClass => {
        const dateWithAddedYears = MonthYear(this.splitted).add.years(years);

        return DayMonthYear({
          ...dateWithAddedYears.splitted,
          day: NumberHelpers.clamp(this.splitted.day, {
            min: 1,
            max: getMonthsDaysNumber(dateWithAddedYears.splitted.year)[
              dateWithAddedYears.splitted.month - 1
            ],
          }),
        });
      },
    };
  }

  get subtract() {
    return {
      days: (days: number): DayMonthYearClass => {
        return Array.from({ length: days }).reduce<DayMonthYearClass>(
          (oldValue) => oldValue.getPreviousDay(),
          this
        );
      },

      months: (months: number): DayMonthYearClass => {
        const dateWithSubtractedMonths = MonthYear(
          this.splitted
        ).subtract.months(months);

        return DayMonthYear({
          ...dateWithSubtractedMonths.splitted,
          day: NumberHelpers.clamp(this.splitted.day, {
            min: 1,
            max: getMonthsDaysNumber(dateWithSubtractedMonths.splitted.year)[
              dateWithSubtractedMonths.splitted.month - 1
            ],
          }),
        });
      },

      years: (years: number): DayMonthYearClass => {
        const dateWithSubtractedYears = MonthYear(this.splitted).subtract.years(
          years
        );

        return DayMonthYear({
          ...dateWithSubtractedYears.splitted,
          day: NumberHelpers.clamp(this.splitted.day, {
            min: 1,
            max: getMonthsDaysNumber(dateWithSubtractedYears.splitted.year)[
              dateWithSubtractedYears.splitted.month - 1
            ],
          }),
        });
      },
    };
  }

  get is() {
    return {
      leapYear: () => {
        return this.convert.toMonthYear().is.leapYear();
      },

      between: (min: DayMonthYearClass, max: DayMonthYearClass): boolean => {
        return this.is.after(min) && this.is.before(max);
      },
      equals: (dateToCompare: DayMonthYearClass): boolean => {
        const isEqualsWithoutDay = this.convert
          .toMonthYear()
          .is.equals(dateToCompare.convert.toMonthYear());
        return (
          isEqualsWithoutDay && this.splitted.day === dateToCompare.splitted.day
        );
      },
      after: (dateToCompare: DayMonthYearClass): boolean => {
        const isAfterWithoutDay = this.convert
          .toMonthYear()
          .is.after(dateToCompare.convert.toMonthYear());
        if (isAfterWithoutDay) return true;

        if (
          this.convert
            .toMonthYear()
            .is.equals(dateToCompare.convert.toMonthYear())
        ) {
          return this.splitted.day > dateToCompare.splitted.day;
        }

        return false;
      },
      before: (dateToCompare: DayMonthYearClass): boolean => {
        const isBeforeWithoutDay = this.convert
          .toMonthYear()
          .is.before(dateToCompare.convert.toMonthYear());
        if (isBeforeWithoutDay) return true;

        if (
          this.convert
            .toMonthYear()
            .is.equals(dateToCompare.convert.toMonthYear())
        ) {
          return this.splitted.day < dateToCompare.splitted.day;
        }

        return false;
      },
    };
  }

  private getPreviousDay(): DayMonthYearClass {
    if (this.splitted.month === 1 && this.splitted.day === 1) {
      return DayMonthYear({
        day: getMonthsDaysNumber(this.splitted.year - 1)[11],
        month: 12,
        year: this.splitted.year - 1,
      });
    }

    if (this.splitted.day === 1) {
      return DayMonthYear({
        ...this.splitted,
        day: getMonthsDaysNumber(this.splitted.year)[this.splitted.month - 2],
        month: this.splitted.month - 1,
      });
    }

    return DayMonthYear({ ...this.splitted, day: this.splitted.day - 1 });
  }

  private getNextDay(): DayMonthYearClass {
    if (
      this.splitted.month === 12 &&
      this.splitted.day === getMonthsDaysNumber(this.splitted.year)[11]
    ) {
      return DayMonthYear({ day: 1, month: 1, year: this.splitted.year + 1 });
    }

    if (
      this.splitted.day ===
      getMonthsDaysNumber(this.splitted.year)[this.splitted.month - 1]
    ) {
      return DayMonthYear({
        ...this.splitted,
        day: 1,
        month: this.splitted.month + 1,
      });
    }

    return DayMonthYear({ ...this.splitted, day: this.splitted.day + 1 });
  }
}
