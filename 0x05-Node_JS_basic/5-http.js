const http = require('http');

const port = 1245;
const path = process.argv[2];

const fs = require('fs');

const countStudents = (path) => {
  const fields = {};
  let count = 0;
  const firstNameIndex = 0;
  const fieldIndex = 3;
  const message = [];
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.toString().trim().split('\n');
      // Process each line
      lines.forEach((line, index) => {
        // Skip the header row
        if (index === 0 || line.trim() === '') return;

        count += 1;
        // Split each line into columns. Assuming comma-separated values
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
      message.push(`Number of students: ${count}`);
      for (const key in fields) {
        if (Object.hasOwnProperty.call(fields, key)) {
          const size = fields[key].length;
          const list = fields[key].join(', ');
          message.push(`Number of students in ${key}: ${size}. List: ${list}`);
        }
      }
      resolve(message);
    });
  });
};

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const url = req.url;
  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    const message = await countStudents(path);
    res.end(message.join('\n'));
  }
});

app.listen(port);

module.exports = app;
