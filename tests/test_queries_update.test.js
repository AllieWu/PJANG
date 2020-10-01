'use strict';
import mongoose from "mongoose";
import {connectToDatabase} from "../connectMongodb.js"
import {saveDataInDB, deleteDataInDB, count} from "../JSONtoMongo.js"
import * as fs from "fs";
import {findFootballClubBySchoolName, updateSchool} from  "../queries.js"

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

// Turn each array into a string and see if there's an exact match.
const arrEqual = (arr1, arr2) => {
  return JSON.stringify(arr1) == JSON.stringify(arr2)
}

// Check each property of two objects
// Handles where one of the fields might be an array
const clubEqual = (obj1, obj2) => {
  var keys = Object.keys(obj1)
  // console.log(keys)
  for(var i = 0; i < keys.length; i++){
    if(Array.isArray(obj1[keys[i]])){
      if ( ! arrEqual( obj1[keys[i]], obj2[keys[i]] ) ){
        return false
      }
    } else if( obj1[keys[i]] != obj2[keys[i]] ){
      // console.log(keys[i], 'is not equal')
      return false
    }
  }
  return true
}

const makeRandom = () => {
  const data = {}
  data.mascot = "mascot " + Math.random();
  data.color = "color " + Math.random();
  data.conference = "conference " + Math.random();
  data.search = Array.from({length: 4}, () => "" + (Math.floor(Math.random() * 40) ));
  return data
}


test('test update', async () => {
  for(var i = 0; i < data.length; i++){
    const random = makeRandom()
    await updateSchool(data[i].school, random)
    const club = await findFootballClubBySchoolName(data[i].school)
    const bool = clubEqual(random, club)
    // console.log("randomized : " + JSON.stringify(random))
    // console.log("randomized in db : " + JSON.stringify(club))
    await expect(bool).toBeTruthy()
  }
},)
