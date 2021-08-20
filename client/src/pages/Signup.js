import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { Input, Button } from "@material-ui/core";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [addUserForm, setAddUserForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: addUserForm.username,
        firstName: addUserForm.firstName,
        lastName: addUserForm.lastName,
        email: addUserForm.email,
        password: addUserForm.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
    console.log(mutationResponse);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setAddUserForm({
      ...addUserForm,
      [name]: value,
    });
  };
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>
      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group flex-row space-between my-2">
          <label htmlFor="username">User Name:</label>
          <Input
            className="form-control"
            placeholder="Username"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <Input
            className="form-control"
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>

        <div className="form-group flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <Input
            className="form-control"
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <Input
            className="form-control"
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <Input
            className="form-control"
            placeholder="******"
            name="password"
            type={showPassword ? "text" : "password"}
            id="pwd"
            onChange={handleChange}
          />
          <Button className="ui secondary button" onClick={handleShowPassword}>
            {showPassword ? "Hide password" : "Show password"}
          </Button>
        </div>
        <div className="flex-row flex-end">
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
