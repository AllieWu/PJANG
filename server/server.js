const express = require('./config/express.js')

//initialize app, pass in any middleware
const app = express.init()
 
// Use env port or default
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server now running on port ${port}!`));
