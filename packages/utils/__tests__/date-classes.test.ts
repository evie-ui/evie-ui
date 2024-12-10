import { describe, expect, it } from "bun:test";
import { DayMonthYear } from "../src/utils/date/fragments/day-month-year-class";
import { MonthYear } from "../src/utils/date/fragments/month-year-class";

describe("DayMonthYear DateHelpers", () => {
  it("isEqual", () => {
    expect(
      DayMonthYear({ day: 1, month: 1, year: 2022 }).is.equals(
        DayMonthYear({
          day: 1,
          month: 1,
          year: 2022,
        }),
      ),
    ).toBe(true);
    expect(
      DayMonthYear({ day: 31, month: 12, year: 2022 }).is.equals(
        DayMonthYear({
          day: 31,
          month: 12,
          year: 2022,
        }),
      ),
    ).toBe(true);
    expect(
      DayMonthYear({ day: 31, month: 12, year: 2023 }).is.equals(
        DayMonthYear({
          day: 31,
          month: 12,
          year: 2022,
        }),
      ),
    ).toBe(false);
  });

  it("isBefore", () => {
    expect(
      DayMonthYear({ day: 1, month: 1, year: 2022 }).is.before(
        DayMonthYear({
          day: 5,
          month: 1,
          year: 2022,
        }),
      ),
    ).toBe(true);
    expect(
      DayMonthYear({ day: 1, month: 2, year: 2022 }).is.before(
        DayMonthYear({
          day: 5,
          month: 1,
          year: 2022,
        }),
      ),
    ).toBe(false);
    expect(
      DayMonthYear({ day: 1, month: 1, year: 2023 }).is.before(
        DayMonthYear({
          day: 5,
          month: 1,
          year: 2022,
        }),
      ),
    ).toBe(false);
    expect(
      DayMonthYear({ day: 1, month: 1, year: 2023 }).is.before(
        DayMonthYear({
          day: 19,
          month: 12,
          year: 2022,
        }),
      ),
    ).toBe(false);
    expect(
      DayMonthYear({ day: 1, month: 2, year: 2023 }).is.before(
        DayMonthYear({
          day: 5,
          month: 1,
          year: 2022,
        }),
      ),
    ).toBe(false);
    expect(
      DayMonthYear({ day: 1, month: 1, year: 2021 }).is.before(
        DayMonthYear({
          day: 5,
          month: 1,
          year: 2022,
        }),
      ),
    ).toBe(true);
    expect(
      DayMonthYear({ day: 31, month: 12, year: 2021 }).is.before(
        DayMonthYear({
          day: 5,
          month: 1,
          year: 2022,
        }),
      ),
    ).toBe(true);
  });

  it("isAfter", () => {
    expect(
      DayMonthYear({ day: 1, month: 1, year: 2023 }).is.after(
        DayMonthYear({
          day: 5,
          month: 1,
          year: 2022,
        }),
      ),
    ).toBe(true);
    expect(
      DayMonthYear({ day: 6, month: 1, year: 2022 }).is.after(
        DayMonthYear({
          day: 5,
          month: 1,
          year: 2022,
        }),
      ),
    ).toBe(true);
    expect(
      DayMonthYear({ day: 1, month: 1, year: 2022 }).is.after(
        DayMonthYear({
          day: 5,
          month: 1,
          year: 2022,
        }),
      ),
    ).toBe(false);
    expect(
      DayMonthYear({ day: 1, month: 1, year: 2023 }).is.after(
        DayMonthYear({
          day: 19,
          month: 12,
          year: 2022,
        }),
      ),
    ).toBe(true);
    expect(
      DayMonthYear({ day: 1, month: 2, year: 2023 }).is.after(
        DayMonthYear({
          day: 5,
          month: 1,
          year: 2022,
        }),
      ),
    ).toBe(true);
    expect(
      DayMonthYear({ day: 1, month: 1, year: 2021 }).is.after(
        DayMonthYear({
          day: 5,
          month: 1,
          year: 2022,
        }),
      ),
    ).toBe(false);
    expect(
      DayMonthYear({ day: 31, month: 12, year: 2021 }).is.after(
        DayMonthYear({
          day: 5,
          month: 1,
          year: 2022,
        }),
      ),
    ).toBe(false);
  });

  it("isBetween", () => {
    expect(
      DayMonthYear({ day: 1, month: 1, year: 2023 }).is.between(
        DayMonthYear({ day: 5, month: 1, year: 2022 }),
        DayMonthYear({ day: 19, month: 12, year: 2022 }),
      ),
    ).toBe(false);

    expect(
      DayMonthYear({ day: 6, month: 1, year: 2022 }).is.between(
        DayMonthYear({ day: 5, month: 1, year: 2022 }),
        DayMonthYear({ day: 19, month: 12, year: 2022 }),
      ),
    ).toBe(true);

    expect(
      DayMonthYear({ day: 1, month: 1, year: 2022 }).is.between(
        DayMonthYear({ day: 1, month: 1, year: 2022 }),
        DayMonthYear({ day: 5, month: 1, year: 2022 }),
      ),
    ).toBe(false);

    expect(
      DayMonthYear({ day: 1, month: 1, year: 2023 }).is.between(
        DayMonthYear({ day: 19, month: 12, year: 2022 }),
        DayMonthYear({ day: 5, month: 1, year: 2023 }),
      ),
    ).toBe(true);

    expect(
      DayMonthYear({ day: 1, month: 2, year: 2023 }).is.between(
        DayMonthYear({ day: 5, month: 1, year: 2022 }),
        DayMonthYear({ day: 19, month: 12, year: 2022 }),
      ),
    ).toBe(false);

    expect(
      DayMonthYear({ day: 1, month: 1, year: 2021 }).is.between(
        DayMonthYear({ day: 1, month: 1, year: 2022 }),
        DayMonthYear({ day: 1, month: 1, year: 2023 }),
      ),
    ).toBe(false);

    expect(
      DayMonthYear({ day: 31, month: 12, year: 2021 }).is.between(
        DayMonthYear({ day: 5, month: 1, year: 2022 }),
        DayMonthYear({ day: 19, month: 12, year: 2022 }),
      ),
    ).toBe(false);
  });

  it("add months", () => {
    expect(DayMonthYear({ day: 1, month: 1, year: 2023 }).add.months(1).toString("dd/mm/yyyy")).toBe(
      DayMonthYear({ day: 1, month: 2, year: 2023 }).toString("dd/mm/yyyy"),
    );

    expect(DayMonthYear({ day: 1, month: 12, year: 2023 }).add.months(1).toString("dd/mm/yyyy")).toBe(
      DayMonthYear({ day: 1, month: 1, year: 2024 }).toString("dd/mm/yyyy"),
    );

    expect(DayMonthYear({ day: 30, month: 11, year: 2023 }).add.months(1).toString("dd/mm/yyyy")).toBe(
      DayMonthYear({ day: 30, month: 12, year: 2023 }).toString("dd/mm/yyyy"),
    );
  });

  it("remove months", () => {
    expect(DayMonthYear({ day: 1, month: 1, year: 2023 }).subtract.months(1).toString("dd/mm/yyyy")).toBe(
      DayMonthYear({ day: 1, month: 12, year: 2022 }).toString("dd/mm/yyyy"),
    );

    expect(DayMonthYear({ day: 1, month: 12, year: 2023 }).subtract.months(1).toString("dd/mm/yyyy")).toBe(
      DayMonthYear({ day: 1, month: 11, year: 2023 }).toString("dd/mm/yyyy"),
    );

    expect(DayMonthYear({ day: 31, month: 12, year: 2023 }).subtract.months(1).toString("dd/mm/yyyy")).toBe(
      DayMonthYear({ day: 30, month: 11, year: 2023 }).toString("dd/mm/yyyy"),
    );
  });

  it("add years", () => {
    expect(DayMonthYear({ day: 1, month: 1, year: 2023 }).add.years(1).toString("dd/mm/yyyy")).toBe(
      DayMonthYear({ day: 1, month: 1, year: 2024 }).toString("dd/mm/yyyy"),
    );

    expect(DayMonthYear({ day: 1, month: 12, year: 2023 }).add.years(1).toString("dd/mm/yyyy")).toBe(
      DayMonthYear({ day: 1, month: 12, year: 2024 }).toString("dd/mm/yyyy"),
    );
  });

  it("add years with leap", () => {
    expect(DayMonthYear({ day: 29, month: 2, year: 2022 }).add.years(1).toString("dd/mm/yyyy")).toBe(
      DayMonthYear({ day: 28, month: 2, year: 2023 }).toString("dd/mm/yyyy"),
    );

    expect(DayMonthYear({ day: 29, month: 2, year: 2020 }).add.years(4).toString("dd/mm/yyyy")).toBe(
      DayMonthYear({ day: 29, month: 2, year: 2024 }).toString("dd/mm/yyyy"),
    );
  });

  it("remove years", () => {
    expect(DayMonthYear({ day: 1, month: 1, year: 2023 }).subtract.years(1).toString("dd/mm/yyyy")).toBe(
      DayMonthYear({ day: 1, month: 1, year: 2022 }).toString("dd/mm/yyyy"),
    );

    expect(DayMonthYear({ day: 1, month: 12, year: 2023 }).subtract.years(1).toString("dd/mm/yyyy")).toBe(
      DayMonthYear({ day: 1, month: 12, year: 2022 }).toString("dd/mm/yyyy"),
    );
  });

  it("remove years with leap", () => {
    expect(DayMonthYear({ day: 29, month: 2, year: 2024 }).subtract.years(1).toString("dd/mm/yyyy")).toBe(
      DayMonthYear({ day: 28, month: 2, year: 2023 }).toString("dd/mm/yyyy"),
    );

    expect(DayMonthYear({ day: 29, month: 2, year: 2024 }).subtract.years(4).toString("dd/mm/yyyy")).toBe(
      DayMonthYear({ day: 29, month: 2, year: 2020 }).toString("dd/mm/yyyy"),
    );
  });

  it("calculate difference", () => {
    // expect(
    //   DayMonthYear({ day: 29, month: 2, year: 2024 }).difference(DayMonthYear({ day: 29, month: 2, year: 2022 })),
    // ).toStrictEqual({
    //   day: 0,
    //   month: 0,
    //   year: 2,
    // });

    expect(
      DayMonthYear({ day: 29, month: 2, year: 2024 }).difference(DayMonthYear({ day: 28, month: 2, year: 2022 })),
    ).toStrictEqual({
      day: 0,
      month: 0,
      year: 2,
    });

    expect(
      DayMonthYear({ day: 1, month: 1, year: 2023 }).difference(DayMonthYear({ day: 1, month: 1, year: 2022 })),
    ).toStrictEqual({
      day: 0,
      month: 0,
      year: 1,
    });
    expect(
      DayMonthYear({ day: 1, month: 1, year: 2023 }).difference(DayMonthYear({ day: 2, month: 1, year: 2022 })),
    ).toStrictEqual({
      day: 1,
      month: 0,
      year: 1,
    });
    expect(
      DayMonthYear({ day: 31, month: 1, year: 2023 }).difference(DayMonthYear({ day: 1, month: 2, year: 2023 })),
    ).toStrictEqual({
      day: 1,
      month: 0,
      year: 0,
    });
    expect(
      DayMonthYear({ day: 1, month: 1, year: 2023 }).difference(DayMonthYear({ day: 1, month: 1, year: 2024 })),
    ).toStrictEqual({
      day: 0,
      month: 0,
      year: 1,
    });

    expect(
      DayMonthYear({ day: 1, month: 1, year: 2023 }).difference(DayMonthYear({ day: 1, month: 1, year: 2023 })),
    ).toStrictEqual({
      day: 0,
      month: 0,
      year: 0,
    });

    expect(
      DayMonthYear({ day: 1, month: 1, year: 2023 }).difference(DayMonthYear({ day: 1, month: 2, year: 2024 })),
    ).toStrictEqual({
      day: 0,
      month: 1,
      year: 1,
    });

    expect(
      DayMonthYear({ day: 1, month: 1, year: 2023 }).difference(DayMonthYear({ day: 1, month: 12, year: 2022 })),
    ).toStrictEqual({
      day: 0,
      month: 1,
      year: 0,
    });
    expect(
      DayMonthYear({ day: 1, month: 1, year: 2023 }).difference(DayMonthYear({ day: 1, month: 2, year: 2023 })),
    ).toStrictEqual({
      day: 0,
      month: 1,
      year: 0,
    });
  });
});

describe("MonthYear DateHelpers", () => {
  it("isEqual", () => {
    expect(MonthYear({ month: 1, year: 2022 }).is.equals(MonthYear({ month: 1, year: 2023 }))).toBe(false);
    expect(MonthYear({ month: 12, year: 2022 }).is.equals(MonthYear({ month: 12, year: 2022 }))).toBe(true);
    expect(MonthYear({ month: 11, year: 2023 }).is.equals(MonthYear({ month: 12, year: 2022 }))).toBe(false);
  });

  it("isBefore", () => {
    expect(MonthYear({ month: 1, year: 2022 }).is.before(MonthYear({ month: 1, year: 2022 }))).toBe(false);
    expect(MonthYear({ month: 2, year: 2022 }).is.before(MonthYear({ month: 1, year: 2022 }))).toBe(false);
    expect(MonthYear({ month: 1, year: 2023 }).is.before(MonthYear({ month: 1, year: 2022 }))).toBe(false);
    expect(MonthYear({ month: 1, year: 2023 }).is.before(MonthYear({ month: 12, year: 2022 }))).toBe(false);
    expect(MonthYear({ month: 1, year: 2021 }).is.before(MonthYear({ month: 1, year: 2022 }))).toBe(true);
    expect(MonthYear({ month: 12, year: 2021 }).is.before(MonthYear({ month: 1, year: 2022 }))).toBe(true);
  });

  it("isAfter", () => {
    expect(MonthYear({ month: 1, year: 2023 }).is.after(MonthYear({ month: 1, year: 2022 }))).toBe(true);
    expect(MonthYear({ month: 1, year: 2022 }).is.after(MonthYear({ month: 1, year: 2022 }))).toBe(false);
    expect(MonthYear({ month: 1, year: 2023 }).is.after(MonthYear({ month: 12, year: 2022 }))).toBe(true);
    expect(MonthYear({ month: 2, year: 2023 }).is.after(MonthYear({ month: 1, year: 2022 }))).toBe(true);
    expect(MonthYear({ month: 1, year: 2021 }).is.after(MonthYear({ month: 1, year: 2022 }))).toBe(false);
    expect(MonthYear({ month: 12, year: 2021 }).is.after(MonthYear({ month: 1, year: 2022 }))).toBe(false);
  });

  it("isBetween", () => {
    expect(
      MonthYear({ month: 1, year: 2023 }).is.between(
        MonthYear({ month: 1, year: 2022 }),
        MonthYear({ month: 12, year: 2022 }),
      ),
    ).toBe(false);

    expect(
      MonthYear({ month: 1, year: 2022 }).is.between(
        MonthYear({ month: 1, year: 2022 }),
        MonthYear({ month: 12, year: 2022 }),
      ),
    ).toBe(false);

    expect(
      MonthYear({ month: 1, year: 2023 }).is.between(
        MonthYear({ month: 1, year: 2022 }),
        MonthYear({ month: 1, year: 2024 }),
      ),
    ).toBe(true);

    expect(
      MonthYear({ month: 1, year: 2023 }).is.between(
        MonthYear({ month: 12, year: 2022 }),
        MonthYear({ month: 1, year: 2023 }),
      ),
    ).toBe(false);

    expect(
      MonthYear({ month: 2, year: 2023 }).is.between(
        MonthYear({ month: 1, year: 2022 }),
        MonthYear({ month: 12, year: 2022 }),
      ),
    ).toBe(false);

    expect(
      MonthYear({ month: 1, year: 2021 }).is.between(
        MonthYear({ month: 1, year: 2022 }),
        MonthYear({ month: 1, year: 2023 }),
      ),
    ).toBe(false);

    expect(
      MonthYear({ month: 12, year: 2021 }).is.between(
        MonthYear({ month: 1, year: 2022 }),
        MonthYear({ month: 12, year: 2022 }),
      ),
    ).toBe(false);
  });

  it("add months", () => {
    expect(MonthYear({ month: 1, year: 2023 }).add.months(1).toString("mm/yyyy")).toBe(
      MonthYear({ month: 2, year: 2023 }).toString("mm/yyyy"),
    );

    expect(MonthYear({ month: 12, year: 2023 }).add.months(1).toString("mm/yyyy")).toBe(
      MonthYear({ month: 1, year: 2024 }).toString("mm/yyyy"),
    );
  });

  it("remove months", () => {
    expect(MonthYear({ month: 1, year: 2023 }).subtract.months(1).toString("mm/yyyy")).toBe(
      MonthYear({ month: 12, year: 2022 }).toString("mm/yyyy"),
    );

    expect(MonthYear({ month: 12, year: 2023 }).subtract.months(1).toString("mm/yyyy")).toBe(
      MonthYear({ month: 11, year: 2023 }).toString("mm/yyyy"),
    );
  });

  it("add years", () => {
    expect(MonthYear({ month: 1, year: 2023 }).add.years(1).toString("mm/yyyy")).toBe(
      MonthYear({ month: 1, year: 2024 }).toString("mm/yyyy"),
    );

    expect(MonthYear({ month: 12, year: 2023 }).add.years(1).toString("mm/yyyy")).toBe(
      MonthYear({ month: 12, year: 2024 }).toString("mm/yyyy"),
    );
  });

  it("remove years", () => {
    expect(MonthYear({ month: 1, year: 2023 }).subtract.years(1).toString("mm/yyyy")).toBe(
      MonthYear({ month: 1, year: 2022 }).toString("mm/yyyy"),
    );

    expect(MonthYear({ month: 12, year: 2023 }).subtract.years(1).toString("mm/yyyy")).toBe(
      MonthYear({ month: 12, year: 2022 }).toString("mm/yyyy"),
    );
  });

  it("calculate difference", () => {
    expect(MonthYear({ month: 1, year: 2023 }).difference(MonthYear({ month: 1, year: 2022 }))).toStrictEqual({
      month: 0,
      year: 1,
    });
    expect(MonthYear({ month: 1, year: 2023 }).difference(MonthYear({ month: 1, year: 2024 }))).toStrictEqual({
      month: 0,
      year: 1,
    });

    expect(MonthYear({ month: 1, year: 2023 }).difference(MonthYear({ month: 1, year: 2023 }))).toStrictEqual({
      month: 0,
      year: 0,
    });

    expect(MonthYear({ month: 1, year: 2023 }).difference(MonthYear({ month: 2, year: 2024 }))).toStrictEqual({
      month: 1,
      year: 1,
    });

    expect(MonthYear({ month: 1, year: 2023 }).difference(MonthYear({ month: 12, year: 2022 }))).toStrictEqual({
      month: 1,
      year: 0,
    });
    expect(MonthYear({ month: 1, year: 2023 }).difference(MonthYear({ month: 2, year: 2023 }))).toStrictEqual({
      month: 1,
      year: 0,
    });
  });
});
