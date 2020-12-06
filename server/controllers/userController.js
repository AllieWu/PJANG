const User = require('../models/userModel.js'),
    stripe = require('stripe')(process.env.REACT_APP_BKEY),
    signToken = require('../authHelperFunctions').signToken;

module.exports = {
    //list users
    //sends response in JSON with all the users found in the database
    index: async (req, res) => {
        try {
            const users = await User.find({});
            res.json(users);
        } 
        catch(err) {
            alert(err);
        }
    },

    //get one user
    show: async(req, res) => {
        console.log("Current User:");
        console.log(req.user);

        try {
            const user = await User.findById(req.params.id);
            res.json(user);
        }
        catch(err) {
            alert(err);
        }
    },

    //create a new user (for sign up)
    //takes in the request body and fills in the parameters of the User mongo model
    create: async (req, res) => {
        try {
            //create a new User, put it in the database, then sign the token based on that user information
            //get all parameters from the body (name, email, password)
            const user = await User.create(req.body);
            console.log("User created");
            //creating signed token by passing user as a JSON object (user is payload)
            const token = await signToken(user);

            //respond with the encoded token in JSON format
            //name and email fields can be accessed by decoding
            res.json({success: true, message: "User created with token", token});
        }
        catch(err) {
            res.json({success: false, code: err.code});
        }
    },

    //update a user
    update: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            Object.assign(user, req.body);
            await user.save();

            res.json({success: true, message: "User updated", user});
        }
        catch(err) {
            res.json({success: false, code: err.code})
        }
    },

    //delete a user
    destroy: async (req, res) => {
        try {
            const user = await User.findByIdAndRemove(req.params.id);
            res.json({success: true, message: "User deleted", user});
        }
        catch(err) {
            res.json({success: false, code: err.code});
        }
    },

    //sign in a user
    authenticate: async (req, res) => {
        //look for user in database first (determine if they exist by email)
        const user = await User.findOne({email: req.body.email});
        console.log("Finished searching for user");

        //if user doesn't exist or there is an invalid password, login fails
        if (!user || !user.validPassword(req.body.password)) {
            console.log("Invalid login");
            return res.json({success: false, message: "Invalid Login"});
        }
        console.log("Valid login");

        //if login succeeds, return the token with the user info (granting access to info given proper username/password combo)
        const token = await signToken(user);
        console.log("finished sign token");
        res.json({success: true, message: "Token attached", token});
    },

    createCustomer: async (req, res) => {
        try {
            const customerID = await stripe.customers.create({
                name: req.body.name,
                email: req.body.email
            });
            res.json({success: true, customerID})
        } catch(err) {
            res.json({success: false, code: err.code})
        }
    }
};