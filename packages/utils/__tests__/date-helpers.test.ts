import { describe, expect, it } from "bun:test";
import { DateHelpers } from "../src/utils/date";
import { DayMonthYear } from "../src/utils/date/fragments/day-month-year-class";
import { MonthYear } from "../src/utils/date/fragments/month-year-class";

describe("DayMonthYear DateHelpers", () => {
  it("group", () => {
    expect(
      DateHelpers.DayMonthYear.group([
        DayMonthYear({ day: 1, month: 1, year: 2022 }),
        DayMonthYear({ day: 2, month: 1, year: 2022 }),
      ]),
    ).toEqual([[DayMonthYear({ day: 1, month: 1, year: 2022 }), DayMonthYear({ day: 2, month: 1, year: 2022 })]]);

    expect(
      DateHelpers.DayMonthYear.group([
        DayMonthYear({ day: 1, month: 1, year: 2022 }),
        DayMonthYear({ day: 2, month: 1, year: 2022 }),
        DayMonthYear({ day: 4, month: 1, year: 2022 }),
      ]),
    ).toEqual([
      [DayMonthYear({ day: 1, month: 1, year: 2022 }), DayMonthYear({ day: 2, month: 1, year: 2022 })],
      [DayMonthYear({ day: 4, month: 1, year: 2022 })],
    ]);
  });
});

describe("MonthYear DateHelpers", () => {
  it("weeks in right place", () => {
    expect(
      DateHelpers.MonthYear.weeks(
        MonthYear({
          month: 12,
          year: 2023,
        }),
      ),
    ).toEqual([
      [null, null, null, null, null, 1, 2],
      [3, 4, 5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14, 15, 16],
      [17, 18, 19, 20, 21, 22, 23],
      [24, 25, 26, 27, 28, 29, 30],
      [31, null, null, null, null, null, null],
    ]);

    expect(
      DateHelpers.MonthYear.weeks(
        MonthYear({
          month: 1,
          year: 2024,
        }),
      ),
    ).toEqual([
      [null, 1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12, 13],
      [14, 15, 16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25, 26, 27],
      [28, 29, 30, 31, null, null, null],
    ]);

    expect(
      DateHelpers.MonthYear.weeks(
        MonthYear({
          month: 2,
          year: 2024,
        }),
      ),
    ).toEqual([
      [null, null, null, null, 1, 2, 3],
      [4, 5, 6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15, 16, 17],
      [18, 19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, null, null],
    ]);
  });
});
