'use strict';

//////////////////////////////////////////
// export the function that printing the 
//method of request and path of request(route)
////////////////////////////////////////
module.exports=(req,res,next)=>{
  console.log('###request info##',req.method,req.path);
  next();
};