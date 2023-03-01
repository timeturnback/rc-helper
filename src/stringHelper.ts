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
