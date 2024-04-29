export default (set, startString) => {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const stringLength = startString.length;
  const result = [...set.values()].filter((value) => typeof value === 'string'
    && value.startsWith(startString))
    .map((value) => value.slice(stringLength));
  return result.join('-');
};
