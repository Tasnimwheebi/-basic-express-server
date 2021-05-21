'use strict';

//////////////////////////////////
//// require the enviroment /////
////////////////////////////////
require('dotenv').config();

/////////////////////////////////////
// App setup and start accssing the app 
////////////////////////////////////
const PORT = process.env.PORT || 4000;
require('./src/server.js').start(PORT);