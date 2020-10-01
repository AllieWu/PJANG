"use strict";
/* 
  Import modules/files you may need to correctly run the script. 
 */
import { readJsonFile } from "./readFile.js";
import FootballClub from "./footballClubModel.js";

const count = async () => {
  // This prints the count to the console
  // FootballClub.countDocuments({}, (err, c) => console.log("count is", c))
  // This returns a promise that stores the count and has to be awaited
  const docCount = await FootballClub.countDocuments({})
    .then((num) => {
      return num;
    })
    .catch((err) => {
      throw err;
    });
  return docCount;
};

const report = async (err, str) => {
  if (err) {
    throw err;
  }
  const c = await count();
  console.log(str, c);
};

const saveDataInDB = async (footballClub) => {
  return await new Promise(async (resolve, reject) => {
  /**
   * Write function to save your football club data into the database
   * When you have completed populating the footballClub into the
   * database, please make sure you pass the returned docs/data array 
   * into the resolve function and the error into the reject function
   * if you would like to read more about promises please refer to 
   * the readFile.js file
   * Hint
   * you can use insertMany (read more from here https://mongoosejs.com/docs/api.html#model_Model.insertMany)
   */
  });
  
};

const deleteDataInDB = async () => {
  //write code to delete all clubs in database
};

const jsonToMongo = () => {
  const done = true;
  return new Promise(async (res, rej) => {
    /*
    Instantiate a mongoose model for each football club object in the JSON file,
    and then save it to your Mongo database
    //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

    Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
   */
    //delete the existing entries to start fresh
    await deleteDataInDB();
    //checking if the documents have been deleted successfully
    await report(null, "Documents deleted, there are now %d documents.");
    //read file and return the data
    await readJsonFile("schools")
      .then(async (footballClubData) => {
        //save the data into the database
        await saveDataInDB(footballClubData)
          .then(async (data) => {
            //check if the footballClub data has been saved successfully
            await report(null, "All %d documents have been added.");
            res(done);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

export { saveDataInDB, deleteDataInDB, count, jsonToMongo };
