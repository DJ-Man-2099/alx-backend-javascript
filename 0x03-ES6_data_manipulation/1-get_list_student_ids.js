export default (fullArray) => {
  if (!Array.isArray(fullArray)) {
    return [];
  }
  return fullArray.map((student) => student.id);
};
