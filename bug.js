const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling is missing here!
    console.error(err); // This only logs to the console, user doesn't see it
  });
});

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an error
    if (Math.random() < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}