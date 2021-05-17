  
'use strict';
const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('server',()=>{
  it('should get 404 status',async()=>{
    const response = await request.get('/go');
    expect(response.status).toBe(404);
  });
  
  

  it('should get an error', async()=>{
    const response = await request.get('/person?name=');
    expect(response.status).toEqual(500);
  });
});