export default (fullArray, location, newGrades) => {
  if (!Array.isArray(fullArray)) {
    return 0;
  }
  return fullArray
    .filter((student) => student.location === location)
    .map((student) => {
      const updatedStudent = { ...student };
      const newGrade = newGrades.find(
        (grade) => grade.studentId === student.id,
      );
      if (newGrade) {
        updatedStudent.grade = newGrade.grade;
      } else {
        updatedStudent.grade = 'N/A';
      }
      return updatedStudent;
    });
};
