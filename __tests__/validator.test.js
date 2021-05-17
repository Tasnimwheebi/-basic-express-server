'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('server',()=>{
  it('should get 200 status',async()=>{
    const response = await request.get('/person?name=tasnim');
    expect(response.status).toBe(200);
    expect(response.text).toBe('{"name":"tasnim"}');
  }); 
  it('should get 404 status',async()=>{
    const response = await request.post('/person');
    expect(response.status).toBe(404);
  });
});
