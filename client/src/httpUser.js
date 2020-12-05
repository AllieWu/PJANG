import axios from 'axios';
import jwtDecode from 'jwt-decode'

const httpUser = axios.create();

httpUser.getToken = function() {
    return localStorage.getItem('token');
};

httpUser.setToken = function(token) {
    localStorage.setItem('token', token);
    return token;
};

httpUser.getCurrentUser = function() {
    const token = this.getToken();
    return (token ? jwtDecode(token) : null)
};

httpUser.logIn = async function(credentials) {
    try {
        console.log("Logging in...")
        const response = await axios.post( '/api/users/authenticate', credentials );
        console.log("Log in complete")

        const token = response.data.token;
        if(token) {
            this.defaults.headers.common.token = this.setToken(token);
            return jwtDecode(token);
        } else {
            return false;
        }
    } catch(err) {
        console.log(err);
        return false;
    }
};

httpUser.signUp = async function(userInfo) {
    console.log("Signing up...");
    const response = await axios.post('/api/users/getID', userInfo);
    const userID = response.data.customerID;
    if(response) {
        userInfo.id = userID;
    } else {
        return false;
    }

    console.log("Test");
    response = await axios.post('/api/users', userInfo);
    console.log("Sign up complete");

    const token = response.data.token;
    if(token) {
        this.defaults.headers.common.token = this.setToken(token);
        return jwtDecode(token);
    } else {
        return false;
    }
};

httpUser.logOut = function() {
    localStorage.removeItem('token');
    delete this.defaults.headers.common.token;
    return true;
};

httpUser.defaults.headers.common.token = httpUser.getToken();
export default httpUser;