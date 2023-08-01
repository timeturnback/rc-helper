import {
  numberWithCommas,
  changeCase,
  anyCaseToSnakeCase,
  snakeCaseToCamelCase,
  snakeCaseToPascalCase,
  snakeCaseToTitleCase,
} from "../src";

describe("numberWithCommas test", () => {
  test("numberWithCommas test number case", () => {
    expect(numberWithCommas(1000000)).toBe("1,000,000");
    expect(numberWithCommas(1000000.123)).toBe("1,000,000.123");
    expect(numberWithCommas(123123.123123)).toBe("123,123.123123");
    expect(numberWithCommas(123123123.123)).toBe("123,123,123.123");
    expect(numberWithCommas("123123123.123")).toBe("123,123,123.123");
    expect(numberWithCommas("123123123.123", ".", ",")).toBe("123.123.123,123");
  });

  test("numberWithCommas test other case", () => {
    expect(numberWithCommas("test")).toBe(null);
    expect(numberWithCommas({})).toBe(null);
    expect(numberWithCommas({ test: "test" })).toBe(null);
    expect(numberWithCommas(null)).toBe(null);
    expect(numberWithCommas(undefined)).toBe(null);
  });
});

describe("changeCase test", () => {
  test("changeCase", () => {
    expect(changeCase("helloWorld", "snake")).toBe("hello_world");
    expect(changeCase("helloWorld", "camel")).toBe("helloWorld");
    expect(changeCase("helloWorld", "pascal")).toBe("HelloWorld");
    expect(changeCase("helloWorld", "title")).toBe("Hello World");
    expect(changeCase("helloWorld", "test")).toBe(null);
  });
});
