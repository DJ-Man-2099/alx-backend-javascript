export default (fullArray, location, newGrades) => {
  if (!Array.isArray(fullArray)) {
    return 0;
  }
  return fullArray
		.filter(student => student['location'] === location)
		.map(student => {
  const newGrade = newGrades.find(
				grade => grade.studentId === student.id
			);
  if (newGrade) {
    student['grade'] = newGrade.grade;
  } else {
    student['grade'] = 'N/A';
  }
  return student;
});
};
