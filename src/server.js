'use strict';
const express = require('express');
const app = express();

/// error handler
const notFoundHandler = require('./ error-handlers/404.js');
const errorHandler = require('./ error-handlers/500.js');
const logger = require('./middleware/logger.js');

const validator = require('./middleware/validator.js');

app.use(express.json());
app.use(logger);

app.get('/',(req,res)=>{
  res.send('Welcome to My App');
});


/// //localhost:3000/person?name=

app.get('/person',validator,(req,res)=>{
  res.json({
    name:req.query.name,
  });
});

app.use('*',notFoundHandler);
app.use(errorHandler);

function start(PORT){
  app.listen(PORT,()=>{
    console.log(`Listening on port: ${PORT}`);
  });
}

module.exports = {
  app : app,
  start: start,
};