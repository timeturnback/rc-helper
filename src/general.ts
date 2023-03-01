/**
 * Checks if an object has at least one key
 * @param data - The object to check
 * @returns A boolean indicating if the object has at least one key
 */
export const isObjectExistKeys = (data = {} as any) => Object.keys(data).some((key) => data[key]);
