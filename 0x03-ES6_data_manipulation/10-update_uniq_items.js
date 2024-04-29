export default (oldMap) => {
  if (!(oldMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const key of oldMap.keys()) {
    if (oldMap.get(key) === 1) {
      oldMap.set(key, 100);
    }
  }
  return oldMap;
};
