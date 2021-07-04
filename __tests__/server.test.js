'use strict';

const supergoose = require('@code-fellows/supergoose');
const { server } = require('../src/server')
const mockRequest = supergoose(server);

describe('---------- SERVER TEST ----------', () => {

  it('Can make a POST request to /signup to create a new user', async () => {
    const response = await mockRequest.post('/signup')
      .send({ username: "Moe", password: "Moe" })
    expect(response.status).toBe(200)
  });

  it('Middleware function sends a basic header on legitimate credentials', async () => {
    const response = await mockRequest.post('/signin').auth("Moe", "Moe")
    expect(response.status).toBe(200)
  });

  it('Middleware function does not send a basic header on invalid credentials', async () => {
    const response = await mockRequest.post('/signin').auth("Moe", "notMoe")
    expect(response.status).toBe(403)
  });

  it('Can create a new user, then sign into that account again', async () => {
    const request = await mockRequest.post('/signup')
      .send({ username: "Moe", password: "Moe" })
    console.log(request.body);
    const response = await mockRequest.post('/signin')
      .send({ username: "Moe", password: "Moe" })
      .auth(request.body.username, 'Moe');
    expect(response.status).toBe(200);
  });

});