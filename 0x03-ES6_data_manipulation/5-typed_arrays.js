export default (length, position, value) => {
  const array = new Int8Array(length);
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  array[position] = value;
  return new DataView(array.buffer);
};
