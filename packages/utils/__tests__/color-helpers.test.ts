import { describe, expect, it } from "bun:test";
import { hexToRgbaObject, isDarkColor } from "../src/utils/color";

describe("hexToRgb", () => {
  describe("converting valid colors", () => {
    it("should convert black", () => {
      const result = hexToRgbaObject("#000000");
      const expectedResult = { r: 0, g: 0, b: 0, a: 255 };
      expect(result).toStrictEqual(expectedResult);
    });

    it("should convert white", () => {
      const result = hexToRgbaObject("#ffffff");
      const expectedResult = { r: 255, g: 255, b: 255, a: 255 };
      expect(result).toStrictEqual(expectedResult);
    });

    it("should convert red", () => {
      const result = hexToRgbaObject("#ff0000");
      const expectedResult = { r: 255, g: 0, b: 0, a: 255 };
      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe("converting invalid colors", () => {
    it("should return transparent", () => {
      const result = hexToRgbaObject("#gahsrgas");
      const expectedResult = { r: 0, g: 0, b: 0, a: 0 };
      expect(result).toStrictEqual(expectedResult);
    });
  });
});

describe("isDarkColor", () => {
  describe("testing dark colors", () => {
    it("should return true for black", () => {
      const result = isDarkColor("#000000");
      expect(result).toBe(true);
    });

    it("should return false for green", () => {
      const result = isDarkColor("#00ff00");
      expect(result).toBe(false);
    });

    it("should return false for white", () => {
      const result = isDarkColor("#ffffff");
      expect(result).toBe(false);
    });

    it("should return true for #872929 - edge case", () => {
      const result = isDarkColor("#872929");
      expect(result).toBe(true);
    });
  });
});
