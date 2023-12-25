// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe("Capitalize", () => {
  test("should return uppercased Hello", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("should return uppercased World", () => {
    expect(capitalize("world")).toBe("World");
  });

  test("should return empty string for empty input", () => {
    expect(capitalize("")).toBe("");
  });

  test("should handle single character input", () => {
    expect(capitalize("a")).toBe("A");
  });
});

// @ FilterOddNumber
// ! Try to check the filterOddNumber function, and repair the function
describe("FilterOddNumber", () => {
  it("should return [2,4]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it("should return []", () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toEqual([]);
  });
});

// @ EpochDateToUTC
// ! Write Minimum 4 different test case for epochDateToUTC
/**
 * Example input param = 0
 * Expected output = Thu, 01 Jan 1970 00:00:00 GMT
 */
describe("EpochDateToUTC", () => {
  it("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    expect(epochDateToUTC(0)).toBe("Thu, 01 Jan 1970 00:00:00 GMT");
  });

  it("should return correct date for a positive epoch value", () => {
    expect(epochDateToUTC(1609459200)).toBe("Fri, 01 Jan 2021 00:00:00 GMT");
  });

  it("should return correct date for a negative epoch value", () => {
    expect(epochDateToUTC(-86400)).toBe("Wed, 31 Dec 1969 00:00:00 GMT");
  });

  it("should handle epoch value as a string", () => {
    expect(epochDateToUTC("1609459200")).toBe("Fri, 01 Jan 2021 00:00:00 GMT");
  });
});

