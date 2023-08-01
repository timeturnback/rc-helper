/**
  Removes all spaces in a given string.
  @param {string} string - A string value to remove spaces.
  @returns {string} Returns a string value without spaces.
  @throws {TypeError} Throws a TypeError if the input is not a string.
*/
export function removeSpace(string: string) {
  if (typeof string !== "string") throw new TypeError("Input string !");
  return string.replace(/\s/g, "");
}

/**
 * Add commas for thousands
 * @param {any} value
 * @param {string} thousandComma
 * @param {string} floatSymbol
 * @returns {string}
 * @example
 */
export function numberWithCommas(value: any, thousandComma: string = ",", floatSymbol: string = ".") {
  if (!value && value !== 0) return null;
  if (isNaN(+value)) return null;
  const valueString = (+value).toString();
  const [intPart, decimalPart] = valueString.split(".");
  if (decimalPart === undefined) {
    return valueString.replace(/\B(?=(\d{3})+(?!\d))/g, thousandComma);
  } else {
    return `${intPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandComma)}${floatSymbol}${decimalPart || ""}`;
  }
}

export const changeCase = (text: string, caseType: string) => {
  let value = anyCaseToSnakeCase(text);

  switch (caseType) {
    case "snake":
    case "snakeCase":
      return value;
    case "camel":
    case "camelCase":
      return snakeCaseToCamelCase(value);
    case "pascal":
    case "pascalCase":
      return snakeCaseToPascalCase(value);
    case "title":
    case "titleCase":
      return snakeCaseToTitleCase(value);

    default:
      return null;
  }
};

/**
 *
 * @param {string} input
 * @returns {string}
 * @example
 * anyCaseToSnakeCase("helloWorld") // hello_world
 */
export function anyCaseToSnakeCase(input: string) {
  return input
    .replace(/[^a-zA-Z0-9]/g, " ")
    .replace(/([A-Z])/g, (_, y: string) => "_" + y.toLowerCase())
    .replace(/^_/, "")
    .replace(/\s+/g, "_");
}

/**
 *
 * @param {string} input
 * @returns {string}
 * @example
 * snakeCaseToCamelCase("hello_world") // helloWorld
 */
export const snakeCaseToCamelCase = (input: string) => {
  return input.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace("-", "").replace("_", ""));
};

/**
 *
 * @param {string} input
 * @returns {string}
 * @example
 * snakeCaseToPascalCase("hello_world") // HelloWorld
 */
export const snakeCaseToPascalCase = (input: string) => {
  return snakeCaseToCamelCase(input).replace(/^[a-z]/, (group) => group.toUpperCase());
};

/**
 * @param {string} input
 * @returns {string}
 * @example
 * snakeCaseToTitleCase("hello_world") // Hello World
 */
export const snakeCaseToTitleCase = (input: string) => {
  return snakeCaseToPascalCase(input)
    .replace(/([A-Z])/g, " $1")
    .trim();
};

export const upcaseFirstLetter = (input: string) => {
  if (!input) return input;
  return input.charAt(0).toUpperCase() + input.slice(1);
};

export const capitalizeFirstLetter = upcaseFirstLetter;
