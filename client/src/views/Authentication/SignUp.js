import React, { useState } from "react";
import { Link } from "react-router-dom";
import httpUser from "../../httpUser";
import blueLaundrLogo from "./../../assets/blueCombine.png";

const SignUp = (props) => {
  //want 3 fields to signup with
  const [fields, setFields] = useState({ name: "", email: "", password: "" });

  const [valid, setValid] = useState({success: true, message: ""});

  //update user input for either password or email
  //sets fields whenever input boxes are updated with new values
  const onInputChange = (e) => {
    e.persist();
    setFields((fields) => ({ ...fields, [e.target.name]: e.target.value }));
  };

  //submit user values for password and email
  const onFormSubmit = async (e) => {
    e.preventDefault();
    const user = await httpUser.signUp(fields);
    console.log("sign up result:");
    console.log(user);

    setFields({ name: "", email: "", password: "" });
    if (user.success) {
      props.onSignUpSuccess(user.token);
      props.history.push("/");
    }
    else {
      setValid({success: false, message: user.message});
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

      <h1 style={{ marginBottom: ".5em", marginLeft: "1.2%" }}>Sign Up Page</h1>
      <form
        style={{ marginLeft: "1%" }}
        onChange={onInputChange}
        onSubmit={onFormSubmit}
      >
        <input
          style={{ display: "block", marginBottom: ".5em" }}
          type="text"
          placeholder="Name"
          name="name"
          value={fields.name}
        />
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
          Sign Up
        </button>
      </form>
      {!valid.success && <h1>{valid.message}</h1>}
    </div>
  );
};

export default SignUp;
