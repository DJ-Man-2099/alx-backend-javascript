export default (fullArray, location) => {
  if (!Array.isArray(fullArray)) {
    return [];
  }
  return fullArray.filter((student) => student.location === location);
};
