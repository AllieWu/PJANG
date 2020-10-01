import {
  findFootballClubBySchoolName,
  deleteFootballClubByMascot,
  updateSchool,
  findFootballClubByTags,
  retrieveAllFootballClubs,
  DisplayFormattedData,
} from "./queries.js";
import {connectToDatabase} from './connectMongodb.js'
import {jsonToMongo} from './JSONtoMongo.js'



const main = () => {
  const db = connectToDatabase().on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
  );

  let q1 = false, q2 = false, q3 = false, q4 = false, q5 = false

  db.once("open", async () => {
    console.log("Mongodb connection successful!\n");
    //populate schools.json to the database
    await jsonToMongo()
    console.log("\nNow running queries\nPlease wait....\n");
    

    await findFootballClubBySchoolName("New Mexico State").then((data) =>{
      DisplayFormattedData(data)
      q1 = true
    }).catch(err =>{
      console.error(err)
    })

    await deleteFootballClubByMascot("Paladins").then((done) =>{
      if(done){
        console.log("The school with the mascot, Paladins, has been deleted from the database.\n")
        q2 = true
      } 
    }).catch(err =>{
      console.error(err)
    })

    await updateSchool("Florida", {
      mascot: "Gators",
      color: "#0021A5",
      conference: "SEC",
    }).then((updatedData) =>{
      console.log(updatedData.school + " information has been updated!");
      DisplayFormattedData(updatedData);
      q3 = true
    }).catch(err =>{
      console.error(err)
    })

    await findFootballClubByTags(["razorback football", "razorbackFB"]).then((data) =>{
      DisplayFormattedData(data);
      q4 = true
    }).catch(err =>{
      console.error(err)
    })

    await retrieveAllFootballClubs().then((dataArr) =>{
      dataArr.forEach((element) => {
        DisplayFormattedData(element);
      });
      q5 = true
    }).catch(err =>{
      console.error(err)
    })

    const done = q1 && q2 & q3 && q4 && q5
    if(done){
      db.close()
    }

  });
};

main();
