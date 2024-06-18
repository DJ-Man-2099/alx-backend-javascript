const readDatabase = require('../utils');

const path = process.argv[2];

class StudentsController {
  static async getAllStudents(req, res) {
    let result = [];
    try {
      const data = await readDatabase(path);
      result.push('This is the list of our students');
      const sortedFields = Object.keys(data).sort();
      sortedFields.forEach((key) => {
        if (Object.hasOwnProperty.call(data, key)) {
          const element = data[key];
          result.push(`Number of students in ${key}: ${element.length}. List: ${element.join(', ')}`);
        }
      });
      return res.status(200).send(result.join('\n'));
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    let result;
    try {
      const data = await readDatabase(path);
      if (Object.hasOwnProperty.call(data, major)) {
        const element = data[major];
        result = `List: ${element.join(', ')}`;
      }
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
