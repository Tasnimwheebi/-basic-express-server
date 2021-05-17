  
'use strict';
require('dotenv').config();
const PORT = process.env.PORT || 4000;
require('./src/server.js').start(PORT);