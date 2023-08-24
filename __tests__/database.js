const fs = require('fs');
const path = require('path');
const createProblem = require('../database/problems/createProblem')
const deleteProblem = require('../database/problems/deleteProblem')
const readProblem = require('../database/problems/readProblem')
const readProblemTitles = require('../database/problems/readProblemTitles')
const updateProblem = require('../database/problems/updateProblem')
const client = require('../database/model.js');

// const testJsonFile = path.resolve(__dirname, '../server/db/markets.test.json');

jest.mock('../database/model.js')

// const { expect } = require('chai')
const request = require('supertest')
// Import the required modules
const { Pool } = require('pg');
let app;
// Define the test
describe('Postgres DB Connection', () => {
  beforeAll(async function () {
    // Create a new pool with a connection limit of 1
    const pool = new Pool({
      connectionString: 'postgres://cjtusfzp:1HyM-4LkY3f4MNz2xVFSHGgFkx15kSkM@batyr.db.elephantsql.com/cjtusfzp',
      idleTimeoutMillis: 0, // Disable auto-disconnection of idle clients to make sure we always hit the same temporal schema
      allowExitOnIdle: true
    })
    // client.query = (text, values) => {
    //     return pool.query(text, values)
    //   }
    // const client = pool.connect(); // await? 

    // Mock the query function to always return a connection from the pool we just created
    client.query = (text, values) => {
      return pool.query(text, values)
    }
  })
  
  beforeEach(async function () {
    await client.query('CREATE TEMPORARY TABLE testProblem (LIKE problems INCLUDING ALL)') // This will copy constraints also
  })



    // Optionally we could insert fake data before each test, but in this case it's not needed
    // beforeEach('Insert fake data', async function () {
    //   await client.query('INSERT INTO pg_temp.note (name, content) VALUES ("a_note", "some_content")')
    // })
  
//   afterEach(async function () {
//     await client.query('DROP TABLE IF EXISTS pg_temp.testProblem')
//   })

  it('successfully connecting to db', async function () {
    expect(client).toBeTruthy();
  })
  
//   it('should establish a successful pg db connection', async () => {
//     // Create a new connection pool
//     const pool = new Pool({
//     //   user: 'your_username',
//     //   password: 'your_password',
//     //   host: 'localhost',
//     //   port: 5432,
//     //   database: 'your_database',
//         connectionString: 'postgres://cjtusfzp:1HyM-4LkY3f4MNz2xVFSHGgFkx15kSkM@batyr.db.elephantsql.com/cjtusfzp'
//     });

//     // Attempt to connect to the database
//     const client = await pool.connect();

//     // Verify the connection
//     expect(client).toBeTruthy();

//     // Release the client
//     client.release();
//     // client.close(); 
//     await pool.end()
  
});

// describe('#sync', () => {
//     it('writes a valid marketList to the JSON file', () => {
//       const marketList = [{ location: 'here', cards: 11 }, { location: 'there', cards: 0 }];
//       const result = db.sync(marketList);
//       expect(result).not.toBeInstanceOf(Error);
//       const table = JSON.parse(fs.readFileSync(testJsonFile));
//       expect(table).toEqual(marketList);
//     });
    // it('overwrites previously existing markets', () => {
    //     const marketList = [{ location: 'new', cards: 1 }, { location: 'nowhere', cards: 2 }];
    //     db.sync(marketList);
    //     const table = JSON.parse(fs.readFileSync(testJsonFile));
    //     expect(table).toEqual(marketList);
    //   });
 


// describe('db unit tests', () => {
//   let mockDB = {};

  // beforeAll((done) => {
  //   fs.writeFile(testJsonFile, JSON.stringify([]), () => {
  //     db.reset();
  //     done();
  //   });
  // });

  // afterAll((done) => {
  //   fs.writeFile(testJsonFile, JSON.stringify([]), done);
  // });


// });