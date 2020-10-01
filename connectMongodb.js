"use strict";

/*import all libraries */
import config from "./config.js";
import mongoose from "mongoose";

/* Connect to your database using mongoose - remember to keep your key secret*/
const connectToDatabase = () => {
  //see https://mongoosejs.com/docs/connections.html
  //See https://docs.atlas.mongodb.com/driver-connection/
  /*
   * Hint: This is not the right configuration or an argument is missing.
   * Make sure you read the doc to find the issue and fix before running
   */
  mongoose
    .connect({ useNewUrlParser: true, useUnifiedTopology: true })
    .catch((error) => console.error(error));
  mongoose.set("useCreateIndex", true);
  mongoose.set("useFindAndModify", false);
  return mongoose.connection;
};

export { connectToDatabase };
