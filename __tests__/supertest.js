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

        // it('responds with 200 status and text/html content type', () => {
        //     // console.log('Before request');
        //     return request(server)
        //       .get('/')
        //       .then(response => {
        //         // console.log('After request', response.status);
        //         expect(response.status).toBe(200);
        //         expect(response.header['content-type']).toMatch(/text\/html/);
        //       })
        //       .catch(error => {
        //         console.error('Error:', error.message);
        //       });
        //   });
          
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

            it('post request to /api/createProblem responds with 200 status and sends json',  () => {
                return request(server)
                .post('/api/createProblem')
                .send(problemList)
                .set('Accept', 'application/json').expect('Content-Type', /json/)
                .expect(200);
            })  
            it('post request to /api/readProblem responds with 200 status and request matches response',  () => {
              return request(server)
              .post('/api/readProblem')
              .send(problemList)
              .set('Accept', 'application/json').expect('Content-Type', /json/)
              .expect(200)
              .then((response) => {
                expect(response.body.title).toEqual(problemList.title)
                expect(response.body.description).toEqual(problemList.description)
                expect(response.body.solution).toEqual(problemList.solution)
                expect(response.body.comments).toEqual(problemList.comments)
              })
            })
            it('patch request to /api/updateProblem responds with 200 status and with `successful`',  () => {
              problemList = {
                title: 'testabc12345', description: 'new Description', solution: '123', comments: ''
              }
              return request(server)
              .patch('/api/updateProblem')
              .send(problemList)
              .set('Accept', 'application/json').expect('Content-Type', /json/)
              .expect(200)
              .then((response) => {
                expect(response.body.successful).toEqual(true);
              })
            })
            it('get request to /api/listProblems responds with 200 status and sends back json', async () => {
              return await request(server)
              .get('/api/listProblems')
              .expect('Content-Type', /json/)
              .expect(200)
              .then((response) => {
                expect(response.body.titles.includes(problemList.title)).toEqual(true)
              })
            });            
            it('delete request to /api/deleteProblem responds with 200 status and sends back json',  () => {
                return request(server)
                .delete('/api/deleteProblem')
                .send({title : problemList.title})
                .set('Accept', 'application/json').expect('Content-Type', /json/)
                .expect(200);
            })

        })
    });
})
