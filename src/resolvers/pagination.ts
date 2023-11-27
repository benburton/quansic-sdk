/**
 * Simulate pagination on an array. Useful for testing, but not
 * very practical in production.
 */
const paginate = <T>({
  array,
  limit,
  offset,
}: {
  array: T[];
  limit: number | null | undefined;
  offset: number | null | undefined;
}) => {
  const _limit = limit ?? array.length;
  const _offset = offset ?? 0;
  return [...array.slice(_offset, _offset + _limit)];
};

export default paginate;
