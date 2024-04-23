export default function appendToEachArrayValue(array, appendString) {
  const updatedArray = [];
  for (const iterator of array) {
    updatedArray.push(appendString + iterator);
  }

  return updatedArray;
}
