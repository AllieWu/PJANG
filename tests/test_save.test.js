'use strict';
import mongoose from "mongoose";
import {connectToDatabase} from "../connectMongodb.js"
import {saveDataInDB, deleteDataInDB, count} from "../JSONtoMongo.js"
import * as fs from "fs";

beforeAll(async () => {
  await connectToDatabase()
});

afterAll( async () => {
  await mongoose.disconnect()
});

test('check delete, save, delete', async () => {
  await deleteDataInDB()
  const before_count = await count()
  await expect(before_count).toBe(0)

  const data = await JSON.parse(fs.readFileSync("../schools.json").toString())
  await saveDataInDB(data)
  const after_count = await count()
  await expect(after_count).toBe(data.length)

  await deleteDataInDB()
  const end_count = await count()
  await expect(end_count).toBe(0)
},)
