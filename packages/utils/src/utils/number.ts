"worklet";
import { objectEntries } from "./object";

type ClampProps = { min?: number; max?: number };

export const NumberHelpers = {
  isPositive(x: number) {
    return x > 0;
  },

  isNegative(x: number) {
    return x < 0;
  },

  isZero(x: number) {
    return x === 0;
  },

  percentage(x: number) {
    return {
      /* e.g.
       * x = 10(%)
       * y = 80
       * result = 8
       */
      of: (y: number) => (x / 100) * y,

      /* e.g.
       * x = 1500
       * y = 2000
       * result = 75(%)
       */
      from: (y: number) => (100 * x) / y,
    };
  },

  clamp(value: number, props: ClampProps) {
    if (props.min !== undefined) value = Math.max(value, props.min);
    if (props.max !== undefined) value = Math.min(value, props.max);
    return value;
  },

  sort(arr: number[]) {
    return arr?.slice().sort((a, b) => a - b) ?? [];
  },

  average(arr: number[]) {
    return this.sum(arr) / arr.length;
  },

  removeDuplicates(arr: number[]) {
    return [...new Set(arr)];
  },

  difference(a: number, b: number) {
    return Math.abs(a - b);
  },

  sum(arr: number[]) {
    return arr.reduce((a, b) => a + b, 0);
  },

  mode(arr: number[]) {
    if (arr.length === 0) return;

    const a = arr.reduce(
      (acc, currentValue) => {
        acc[currentValue] = (acc[currentValue] ?? 0) + 1;
        return acc;
      },
      {} as Record<number, number>,
    );

    const sorted = objectEntries(a)
      .map(([key, value]) => ({ key, value }))
      .sort((a, b) => b.value - a.value);

    const from = Number(sorted[1]?.key);
    const to = Number(sorted[0]?.key);

    return { from, to };
  },

  numberOfOccurrences(arr: number[]): Record<number, number> {
    const hashmap = arr.reduce(
      (acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      },
      {} as Record<number, number>,
    );

    return hashmap;
  },

  ensure2Digit(value: number) {
    return value < 10 ? `0${value}` : `${value}`;
  },

  outliers(arr: number[]) {
    if (arr.length < 4) return { withoutOutliers: this.sort(arr), outliers: [] };

    const values = this.sort(arr);
    const q1 = this.quartile25(values);
    const q3 = this.quartile75(values);

    const iqr = q3 - q1;
    const maxValue = q3 + iqr * 1.5;
    const minValue = q1 - iqr * 1.5;

    const withoutOutliers = this.sort(values.filter((x) => x >= minValue && x <= maxValue));
    const outliers = this.sort(values.filter((x) => x < minValue || x > maxValue));

    return { withoutOutliers, outliers };
  },

  zScore(props: { data: number[]; threshold?: number }) {
    const threshold = props.threshold ?? 1;
    const data = props.data ?? [];

    const mean = this.average(data);

    const standardDeviation = Math.sqrt(this.average(data.map((x) => (x - mean) ** 2)));
    const zScores = data.map((point) => (point - mean) / standardDeviation);

    return zScores.reduce(
      (acc, value, index) => {
        if (value > threshold || value < -threshold) {
          acc.outside.push(data[index]);
        } else {
          acc.inside.push(data[index]);
        }

        return {
          inside: this.sort(this.removeDuplicates(acc.inside)),
          outside: this.sort(this.removeDuplicates(acc.outside)),
        };
      },
      { inside: [] as Array<number>, outside: [] as Array<number> },
    );
  },

  /**  */
  median(arr: number[]) {
    return this.quartile50(arr);
  },

  quartile25(arr: number[]) {
    return this.quartile(arr, 0.25);
  },

  quartile50(arr: number[]) {
    return this.quartile(arr, 0.5);
  },

  quartile75(arr: number[]) {
    return this.quartile(arr, 0.75);
  },

  quartile(arr: number[], q: number) {
    const sortedData = this.sort(arr);

    const pos = (sortedData.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;

    if (sortedData[base + 1] !== undefined) {
      return sortedData[base] + rest * (sortedData[base + 1] - sortedData[base]);
    }

    return sortedData[base];
  },
};
