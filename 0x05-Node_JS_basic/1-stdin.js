const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

// Prompt the user for their name
rl.question('', (name) => {
  console.log(`Your name is: ${name}`);

  // Don't forget to close the readline interface
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
  rl.close();
  process.exit(0);
});
