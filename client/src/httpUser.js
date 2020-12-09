import axios from "axios";
import jwtDecode from "jwt-decode";

const httpUser = axios.create();

httpUser.getToken = function () {
  return localStorage.getItem("token");
};

httpUser.setToken = function (token) {
  localStorage.setItem("token", token);
  return token;
};

httpUser.getCurrentUser = function () {
  const token = this.getToken();
  return token ? jwtDecode(token) : null;
};

httpUser.logIn = async function (credentials) {
  try {
    console.log("Logging in...");
    const response = await axios.post("/api/users/authenticate", credentials);
    console.log("Log in complete");

    const token = response.data.token;
    if (token) {
      this.defaults.headers.common.token = this.setToken(token);
      return jwtDecode(token);
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

httpUser.signUp = async function (userInfo) {

  //check if user already exists
  console.log("Searching for user...");
  const response = await axios.get('/api/users/find?email=' + userInfo.email);
  console.log(response);
  if(response.data == null) {
    console.log("User already exists");
    return false;
  }
  else {
    console.log("User not found");
  }


  //create a customer with Stripe using the userInfo
  console.log("Signing up...");
  const response2 = await axios.post("/api/users/generateID", userInfo);
  
  const userID = response2.data.customer.id;
  var userInfo2 = userInfo;
  if (response2) {
    userInfo2.id = userID;
  } else {
    return false;
  }

  //create a collection with User model, and store in database
  const response3 = await axios.post("/api/users", userInfo2);
  console.log("Sign up complete");

  const token = response3.data.token;
  if (token) {
    this.defaults.headers.common.token = this.setToken(token);
    return jwtDecode(token);
  } else {
    return false;
  }

  //REFACTOR: generate a customer ID with userInfo then patch it to the created user 
  //const response3 = await axios.post('/generateID2', userInfo)
  //alternatively, reduce the number of requests
  
};

httpUser.logOut = function () {
  localStorage.removeItem("token");
  delete this.defaults.headers.common.token;
  return true;
};

httpUser.defaults.headers.common.token = httpUser.getToken();
export default httpUser;
