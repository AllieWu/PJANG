import FootballClub from "./footballClubModel.js";

/* Fill out these functions using Mongoose queries
* Write all your mongoose queries in the Promise and pass the
* returned data and error into the res and rej function respectively
* Also, make sure you check if error isn't null before passing it into the rej function
* For example, if a query returned error and data
* if(error){
  rej(error)
  }
  else{
    res(data)
  }
* If you would like to learn more about Promises, please refer to the readFile.js file
*/
//Check out - https://mongoosejs.com/docs/queries.html

const findFootballClubBySchoolName = (_schoolName_) => {
  return new Promise((res, rej) => {
    /*
      Find the document that contains data corresponding to the school name,
      then pass the returned data into the res function.
     */
    
  });
};
const deleteFootballClubByMascot = (_mascot_) => {
  
  const done = true;
  return new Promise((res, rej) => {
    /*
     Find the document with the specified mascot provided in parameter. Go ahead and remove this football Club from your database and pass the variable, "done", into the res function.
     */

    
  });
};
const updateSchool = (_schoolName_, _new_data_) => {
  return new Promise((res, rej) => {
    /*
      A School's mascot, color, and conference are incorrect. Find the football Club, update it, and then pass the returned data into the res function.
     */
    // Correct information:
    const mascot = _new_data_.mascot;
    const color = _new_data_.color;
    const conference = _new_data_.conference;
    const search = _new_data_.search;
    
  });
};

const findFootballClubByTags = (_tags_) => {
  return new Promise((res, rej) => {
    /* A football club can be found using the tags found in search
     * find the football club with the following tags
     * the _tags_ in the parameter is a list of tags, use that to find the football club, then
     * pass the returned data into the res function.
     */
    
  });
};

const retrieveAllFootballClubs = () => {
  return new Promise((res, rej) => {
    /*
      Retrieve all the Football Clubs in the database, and then
     * pass the returned data array into the res function.
     */
    
  });
};


const DisplayFormattedData = (data) => {
  if (data) {
    /**
     * write code here to format your data to look exactly like what was provided in the Readme
     * then log it
     */
    
  } else {
    console.log("Data not found or has been removed!\n");
  }
};

export {
  findFootballClubBySchoolName,
  deleteFootballClubByMascot,
  updateSchool,
  findFootballClubByTags,
  retrieveAllFootballClubs,
  DisplayFormattedData,
};
