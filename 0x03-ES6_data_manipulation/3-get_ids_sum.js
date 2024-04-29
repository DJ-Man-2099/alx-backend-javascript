export default (fullArray) => {
  if (!Array.isArray(fullArray)) {
    return 0;
  }
  return fullArray.reduce((prev, student) => prev + student.id, 0);
};
