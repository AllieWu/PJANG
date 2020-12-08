import React, { useState } from "react";
import { Link } from "react-router-dom";
import httpUser from "../../httpUser";
import blueLaundrLogo from "./../../assets/blueCombine.png";

const LogIn = (props) => {
  const [fields, setFields] = useState({ email: "", password: "" });

  // used to update user input for either password or email
  const onInputChange = (e) => {
    e.persist();
    setFields((fields) => ({ ...fields, [e.target.name]: e.target.value }));
  };

  // used to submit user values for password and email
  const onFormSubmit = async (e) => {
    e.preventDefault();
    const user = await httpUser.logIn(fields);

    setFields({ email: "", password: "" });
    if (user) {
      props.onLoginSuccess(user);
<<<<<<< HEAD
=======
      console.log(props.history);
>>>>>>> fedcfea7a8fe951c494981c8178717a744858a1a
      props.history.push("/");
    }
  };

  return (
    <div style={{ marginLeft: "1%" }}>
      <div className="topnav" style={{ paddingBottom: "0" }}>
        <Link id="logo-link" to="/">
          <img
            className="topnav-logo"
            style={{ marginLeft: "0" }}
            src={blueLaundrLogo}
            alt="Laundr Logo"
          />
        </Link>
      </div>

      <h1 style={{ marginBottom: ".5em", marginLeft: "1.2%" }}>Log In Page</h1>
      <form
        style={{ marginLeft: "1%" }}
        onChange={onInputChange}
        onSubmit={onFormSubmit}
      >
        <input
          style={{ display: "block", marginBottom: ".5em" }}
          type="text"
          placeholder="Email"
          name="email"
          value={fields.email}
        />
        <input
          style={{ display: "block", marginBottom: ".5em" }}
          type="password"
          placeholder="Password"
          name="password"
          value={fields.password}
        />
        <button
          style={{
            marginTop: "1em",
            backgroundColor: "lightgrey",
            display: "block",
            fontWeight: "bold",
            letterSpacing: ".3px",
          }}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
