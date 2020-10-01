import mongoose from "mongoose";
import {connectToDatabase} from "../connectMongodb.js"

const connect = async () => {
  try {
    const connection = await connectToDatabase()
    await connection.close()
    return true
  } catch (error) {
    return false
  }
}

test('connect check', async () => {
  // jest.setTimeout(2000);
  let canItConnect = await connect()
  expect(canItConnect).toBeTruthy()
})
