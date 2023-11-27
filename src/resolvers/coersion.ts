/**
 * Convert T | undefined to T | null
 */
export const coerce = <T>(result: T | undefined): T | null => {
  if (result === undefined) return null;
  return result;
};

/**
 * Convert T | undefined to T, throwing error if value undefined
 */
export const coerceOrFail = <T>(result: T | undefined): T => {
  const coerced = coerce(result);
  if (!coerced) throw new Error("Got undefined when unexpected!");
  return coerced;
};
