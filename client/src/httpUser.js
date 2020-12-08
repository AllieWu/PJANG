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
  //create a customer with Stripe using the userInfo
  console.log("Signing up...");
  const response = await axios.post("/api/users/generateID", userInfo);
  const userID = response.data.customer.id;
  var userInfo2 = userInfo;
  if (response) {
    userInfo2.id = userID;
  } else {
    return false;
  }

  //create a collection with User model, and store in database
  const response2 = await axios.post("/api/users", userInfo2);
  console.log("Sign up complete");

<<<<<<< HEAD
  const token = response.data.token;
=======
  const token = response2.data.token;
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a
  if (token) {
    this.defaults.headers.common.token = this.setToken(token);
    return jwtDecode(token);
  } else {
    return false;
  }
};

httpUser.logOut = function () {
  localStorage.removeItem("token");
  delete this.defaults.headers.common.token;
  return true;
};

httpUser.defaults.headers.common.token = httpUser.getToken();
export default httpUser;
