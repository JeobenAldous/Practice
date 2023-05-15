const express = require('express');
const app = express();

// Define the API data
const apiData = [
  { achievement: 'BackEnd What?' },
  { sayGreeting: 'Hello From StackTrek' }
];

app.get('/', (req, res) => {
  res.send('Hello there!');
});

// Display all the data from the API
app.get('/show', (req, res) => {
  res.send(apiData);
});

// Display the value of achievement
app.get('/achievement', (req, res) => {
  res.send(apiData[0].achievement);
});

// Display the value of sayGreeting
app.get('/greet', (req, res) => {
  res.send(apiData[1].sayGreeting);
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
