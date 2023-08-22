const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
// const { auth } = require('express-openid-connect');
require('dotenv').config();


const apiRouter = require('./routes/api');

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', apiRouter);


// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.SECRET, // store it inside .env
//   baseURL: process.env.BASEURL,
//   clientID: process.env.CLIENTID,
//   issuerBaseURL: process.env.ISSUER
// };

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));


// catch-all route handler for any requests to an unknown route
app.use('/', express.static(path.join(__dirname, '../client')));
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}...`);
});
