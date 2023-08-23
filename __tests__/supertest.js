const { response } = require('express');
const request = require('supertest');

const server = 'http://localhost:3000';

// const db = require('../database/model.js');

describe('Route integration', () => {
    describe('/', () => {
      describe('GET', () => {
        // Note that we return the evaluation of `request` here! It evaluates to
        // a promise, so Jest knows not to say this test passes until that
        // promise resolves. See https://jestjs.io/docs/en/asynchronous

        it('responds with 200 status and text/html content type', () => {
            console.log('Before request');
            return request(server)
              .get('/')
              .then(response => {
                console.log('After request', response.status);
                expect(response.status).toBe(200);
                expect(response.header['content-type']).toMatch(/text\/html/);
              })
              .catch(error => {
                console.error('Error:', error.message);
              });
          });
          
        it('responds with 200 status and text/html content type', async () => {
          return await request(server)
            .get('/')
            .expect('Content-Type', /text\/html/)
            .expect(200);
        });
      });
    });

    describe('/api', () => { 
        describe('/createProblem', () => {
          let problemList;
            beforeEach(() => {
                problemList = {
                    title: 'testabc12345', description: 'xyz', solution: '123', comments: ''
                }
            })

            it('post request to /api/createProblem',  () => {
                return request(server)
                .post('/api/createProblem')
                .send(problemList)
                .set('Accept', 'application/json').expect('Content-Type', /json/)
                .expect(200);
            })       
            it('post request to /api/deleteProblem',  () => {
                return request(server)
                .delete('/api/deleteProblem')
                .send({title : problemList.title})
                .set('Accept', 'application/json').expect('Content-Type', /json/)
                .expect(200);
            })       
        })
    });
})
