const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const client = require('twilio')( //require and initialise the Twilio library with the credentials from the environment
  process.env.TWILIO_ACCOUT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Configure the Express app with body parser's JSON parser
app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

// Make a route for a POST request.
app.post('/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json'); // We're going to respond with JSON too, so set the Content-Type header to application/json.

  // We'll use our Twilio number as the from number 
  // and get the to number and body of the message 
  // from the incoming request body. This returns a 
  // Promise that will fulfill when the API request 
  // succeeds or reject if it fails. In either event
  // we will return a JSON response to tell the 
  // client-side whether the request was a success or not.
  
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.to,
      body: req.body.body
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
