const express = require('express');
const request = require('supertest');
const router = require('./router');
const app = express();
app.use(express.json());

app.use(router);

describe('Test User Routes', () => {
  test('Post - Signup', async () => {
    await request(app)
      .post('/signup')
      .send({ firstName: 'Eric', lastName: 'Clarke' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toEqual('Signup - POST');
        expect(response.body.metadata.hostname).toEqual('127.0.0.1');
        expect(response.body.metadata.firstName).toEqual('Eric');
        expect(response.body.metadata.lastName).toEqual('Clarke');
      });
  });

  test('Get - Profile', async () => {
    await request(app)
      .get('/profile')
      .expect(200)
      .then((response) => {
        expect(response.body.message).toEqual('Profile - GET');
        expect(response.body.metadata.hostname).toEqual('127.0.0.1');
        expect(response.body.metadata.method).toEqual('GET');
      });
  });
});
