import { describe, expect, it } from "bun:test";
import { NumberHelpers } from "../src/utils/number";

const cyclesLength = [
  35, 34, 32, 29, 31, 32, 30, 31, 28, 36, 30, 32, 35, 28, 31, 35, 28, 32, 29, 30, 30, 30, 23, 28, 29, 32, 29, 29, 30,
  28, 29, 31, 30,
];

describe("NumberHelpers", () => {
  it("percentage", () => {
    expect(NumberHelpers.percentage(10).of(80)).toBe(8);
    expect(NumberHelpers.percentage(1500).from(2000)).toBe(75);
  });

  it("mean/average", () => {
    expect(NumberHelpers.average(cyclesLength)).toBeCloseTo(30.5, 1);
  });

  it("median", () => {
    expect(NumberHelpers.median(cyclesLength)).toBeCloseTo(30, 1);
  });

  it("mode", () => {
    expect(NumberHelpers.mode(cyclesLength)).toEqual({
      from: 29,
      to: 30,
    });
  });

  it("clamp", () => {
    expect(
      NumberHelpers.clamp(4, {
        min: 1,
        max: 10,
      }),
    ).toBe(4);

    expect(
      NumberHelpers.clamp(0, {
        min: 1,
        max: 10,
      }),
    ).toBe(1);

    expect(
      NumberHelpers.clamp(100000, {
        min: 1,
      }),
    ).toBe(100000);

    expect(
      NumberHelpers.clamp(100000, {
        max: 1,
      }),
    ).toBe(1);
  });

  it("sort", () => {
    expect(NumberHelpers.sort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(NumberHelpers.sort([2, 3, 1])).toEqual([1, 2, 3]);
  });

  it("outliers", () => {
    expect(NumberHelpers.outliers(cyclesLength)).toEqual({
      withoutOutliers: [
        28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 30, 30, 30, 30, 30, 30, 30, 31, 31, 31, 31, 32, 32, 32, 32, 32, 34,
        35, 35, 35, 36,
      ],
      outliers: [23],
    });

    expect(NumberHelpers.outliers([3, 2, 1])).toEqual({
      withoutOutliers: [1, 2, 3],
      outliers: [],
    });

    expect(NumberHelpers.outliers([3, 2, 1, 50])).toEqual({
      withoutOutliers: [1, 2, 3],
      outliers: [50],
    });

    expect(NumberHelpers.outliers([3, 2, 1, 5, 10])).toEqual({
      withoutOutliers: [1, 2, 3, 5],
      outliers: [10],
    });

    expect(NumberHelpers.outliers([3, 2, 1, 5, 9])).toEqual({
      withoutOutliers: [1, 2, 3, 5, 9],
      outliers: [],
    });
  });

  it("numberOfOccurrences", () => {
    expect(NumberHelpers.numberOfOccurrences([3, 2, 1])).toEqual({ 1: 1, 2: 1, 3: 1 });
    expect(NumberHelpers.numberOfOccurrences(cyclesLength)).toEqual({
      23: 1,
      28: 5,
      29: 6,
      30: 7,
      31: 4,
      32: 5,
      34: 1,
      35: 3,
      36: 1,
    });

    expect(NumberHelpers.numberOfOccurrences([1, 1, 1, 1])).toEqual({ 1: 4 });
    expect(NumberHelpers.numberOfOccurrences([3, 3, 5, 9])).toEqual({
      3: 2,
      5: 1,
      9: 1,
    });
  });

  it("zScore", () => {
    const spike: number[] = [];
    // based on code to generate array with a spike based on https://softwareengineering.stackexchange.com/questions/274424/generate-random-numbers-with-certain-spikes
    // which defines an exponential function
    for (let i = 1; i <= 10; i++) {
      spike.push(1 / (1.1 - i / 10));
    }

    expect(NumberHelpers.zScore({ data: spike })).toEqual({
      inside: [
        1, 1.111111111111111, 1.25, 1.4285714285714284, 1.6666666666666665, 1.9999999999999996, 2.499999999999999,
        3.333333333333333, 4.999999999999998,
      ],
      outside: [9.999999999999991],
    });

    expect(NumberHelpers.zScore({ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] })).toEqual({
      inside: [3, 4, 5, 6, 7, 8],
      outside: [1, 2, 9, 10],
    });

    expect(NumberHelpers.zScore({ data: [2, 3, 3, 5, 3, 4, 8, 4, 8] })).toEqual({
      inside: [3, 4, 5],
      outside: [2, 8],
    });

    expect(NumberHelpers.zScore({ data: [2, 3, 3, 5, 3, 4, 8, 4, 5] })).toEqual({
      inside: [3, 4, 5],
      outside: [2, 8],
    });

    expect(NumberHelpers.zScore({ data: cyclesLength })).toEqual({
      inside: [28, 29, 30, 31, 32],
      outside: [23, 34, 35, 36],
    });
  });
});
