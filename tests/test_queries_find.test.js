'use strict';
import mongoose from "mongoose";
import {connectToDatabase} from "../connectMongodb.js"
import {saveDataInDB, deleteDataInDB, count} from "../JSONtoMongo.js"
import * as fs from "fs";
import {findFootballClubBySchoolName, findFootballClubByTags, retrieveAllFootballClubs} from  "../queries.js"

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

test('test findOne', async () => {
  for(var i = 0; i < data.length; i++){
    const club = await findFootballClubBySchoolName(data[i].school)
    const bool = clubEqual(data[i], club)
    // console.log("testing : %s returned %d", data[i].school, bool)
    await expect(bool).toBeTruthy()
  }
},)

test('test tags', async () => {
  for(var i = 0; i < data.length; i++){
    for(var j = 0; j < data[i].search.length; j++){
      const club = await findFootballClubByTags(data[i].search[j])
      await expect(clubEqual(data[i], club)).toBeTruthy()
    }
  }
},)

test('test retrieveAll', async () => {
  const result = await retrieveAllFootballClubs()
  // Make sure that both of the clubs are sorted by school name
  const clubsSorted = result.sort(function(a,b){return a.school.localeCompare(b.school); })
  const dataSorted = data.sort(function(a,b){return a.school.localeCompare(b.school); })
  for(var i = 0; i < dataSorted.length; i++){
      await expect(clubEqual(dataSorted[i], clubsSorted[i])).toBeTruthy()
  }
},)