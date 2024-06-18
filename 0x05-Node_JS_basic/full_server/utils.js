const { readFile } = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  readFile(path, (err, data) => {
    if (err) {
      reject(err);
      return;
    }
    const fields = {};
    const firstNameIndex = 0;
    const fieldIndex = 3;
    const lines = data.toString().trim().split('\n');
    // Process each line
    lines.forEach((line, index) => {
      if (index === 0 || line.trim() === '') return;
      const columns = line.split(',');
      // Example: Log the first column (e.g., name)
      const field = columns[fieldIndex];
      const firstName = columns[firstNameIndex];
      if (!(field in fields)) {
        fields[field] = [firstName];
      } else {
        fields[field].push(firstName);
      }
    });
    resolve(fields);
  });
});

module.exports = readDatabase;
