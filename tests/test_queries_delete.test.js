'use strict';
import mongoose from "mongoose";
import {connectToDatabase} from "../connectMongodb.js"
import {saveDataInDB, deleteDataInDB, count} from "../JSONtoMongo.js"
import * as fs from "fs";
import {deleteFootballClubByMascot} from  "../queries.js"

let data
beforeAll(async () => {
  data = await JSON.parse(fs.readFileSync("../schools.json").toString())
  await connectToDatabase()
  await deleteDataInDB()
  await saveDataInDB(data)
});

afterAll( async () => {
  await deleteDataInDB()
  await mongoose.disconnect()
});

test('test delete by mascot', async () => {
  for(var i = 0; i < data.length; i++){
    const before = await count()
    const club = await deleteFootballClubByMascot(data[i].mascot)
    const after = await count()
    await expect(before - after).toBe(1)
    // console.log( "deleted club %s ", data[i].mascot )
  }
},)
