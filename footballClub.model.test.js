// To learn more about the Jest testing framework, please follow the link below! Google is your friend.
//Check out - https://jestjs.io/docs/en/

import FootballClub from './footballClubModel.js';
import config from './config.js';
import {connectToDatabase} from './connectMongodb.js'

let footballClub = {
    school: "Tennessee",
    mascot: "Volunteers",
    color: "#F77F00",
    conference: "SEC",
}, id, db;

describe('Football Club Schema Unit Tests', () => {
    describe('Saving to database', () => {

        beforeAll(async () => {
            db = await connectToDatabase()
            console.log(`established connection to db at uri: ${config.db.uri}!`);
        });

        afterEach(async () => {
            if (id) {
                await FootballClub.deleteOne({_id: id}).exec(() => {
                    id = null;
                });
            }
        });

        afterAll(async () => {
            await db.close();
        });

        /*
      Mocha's default timeout for describes is 2000ms. To ensure that the describes do not fail
      prematurely, we can increase the timeout setting with the method this.timeout()
     */

        test('saves properly when school, mascot, color, and conference provided', async (done) => {
            await new FootballClub({
                school: footballClub.school,
                mascot: footballClub.mascot,
                color: footballClub.color,
                conference: footballClub.conference,
            }).save((err, data) => {
                expect(err).toBeNull();
                id = data._id;
                expect(id).not.toBeNull();
                expect(data.school).toBe('Tennessee');
                done();
            });
        }, 10000);

        test('saves properly when all 3 properties are provided', async (done) => {
            await new FootballClub(footballClub).save((err, data) => {
                expect(err).toBeNull();
                id = data._id;
                expect(id).not.toBeNull();
                done();
            });
        });

        test('throws an error when school is not provided', async (done) => {
            await new FootballClub({
                mascot: footballClub.mascot,
                color: footballClub.color,
                conference: footballClub.conference,
            }).save(err => {
                expect(err).not.toBeNull();
                done();
            });
        });

        test('throws an error when mascot is not provided', async (done) => {
            await new FootballClub({
                school: footballClub.school,
                color: footballClub.color,
                conference: footballClub.conference,
            }).save((err) => {
                expect(err).not.toBeNull();
                done();
            })
        });

        test('throws an error when color is not provided', async (done) => {
            await new FootballClub({
                school: footballClub.school,
                mascot: footballClub.mascot,
                conference: footballClub.conference,
            }).save((err) => {
                expect(err).not.toBeNull();
                done();
            })
        });

        test('throws an error when conference is not provided', async (done) => {
            await new FootballClub({
                school: footballClub.school,
                mascot: footballClub.mascot,
                color: footballClub.color,
            }).save((err) => {
                expect(err).not.toBeNull();
                done();
            })
        });

    });
});
