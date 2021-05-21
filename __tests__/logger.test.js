'use strict';
const logger = require('../src/middleware/logger.js');

//////////////////////////////////////////////////////
/// Mocking : testing all possible request middleware 
/// Testing the method of the request
////////////////////////////////////////////////////
describe('logger middleware', () => {
  let consoleSpy;
  const req = { method: 'get', path: 'test' };
  const res = {};
  const next = jest.fn();


  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should log all get requests', () => {
    //// arrange /////
    //// act ////////
    //// assert ////
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalledWith('###request info##', 'get', 'test');
    expect(next).toHaveBeenCalledWith();
    
  });
});