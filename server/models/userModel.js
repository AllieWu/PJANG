const mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs');

//name, user, and password fields
//email is unique to avoid duplicate entries in DB
const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, required: true, unique: true},
    password: { type: String, required: true},
    id: { type: String, required: true, unique: true}
});

//method to create hashed password
//uses bcrypt to create hash for password (don't want to store important information in DB in plaintext)
//in JWT, password is not hashed
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

//method to check if password is correct
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

//when someone saves a new user to the DB with a name, email, and password, before that's saved to the database, have a prehok to handle that event
//before someone saves something into the databse, check their password field and set the password to the hash for the DB

//checks if password was changed before saving
userSchema.pre('save', function(next) {
    if(this.isModified('password')) {
        this.password = this.generateHash(this.password); //plaintext password -> hashed password
    }
    next();
});

const User = mongoose.model('user', userSchema);
module.exports = User;