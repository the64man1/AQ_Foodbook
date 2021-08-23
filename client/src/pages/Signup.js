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
    <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-3/4">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        type="username"
                        id="username"
                        placeholder="Username"
                        onChange={handleChange} />

                    <input 
                        type="firstName"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="firstName"
                        id="firstName"
                        placeholder="First Name"
                        onChange={handleChange} />

                    <input 
                        type="lastName"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="lastName"
                        id="lastName"
                        placeholder="Last Name"
                        onChange={handleChange} />

                    <input 
                        type="email"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={handleChange} />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={handleChange} />


                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleFormSubmit}>
                      Create Account
                    </button>
                </div>

                <div class="text-white mt-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="/login">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
    // <div className="container my-1">
    //   <Link to="/login">← Go to Login</Link>
    //   <h2>Signup</h2>
    //   <form onSubmit={handleFormSubmit}>
    //     <div className="form-group flex-row space-between my-2">
    //       <label htmlFor="username">User Name:</label>
    //       <Input
    //         className="form-control"
    //         placeholder="Username"
    //         name="username"
    //         type="username"
    //         id="username"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="firstName">First Name:</label>
    //       <Input
    //         className="form-control"
    //         placeholder="First"
    //         name="firstName"
    //         type="firstName"
    //         id="firstName"
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <div className="form-group flex-row space-between my-2">
    //       <label htmlFor="lastName">Last Name:</label>
    //       <Input
    //         className="form-control"
    //         placeholder="Last"
    //         name="lastName"
    //         type="lastName"
    //         id="lastName"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="form-group flex-row space-between my-2">
    //       <label htmlFor="email">Email:</label>
    //       <Input
    //         className="form-control"
    //         placeholder="youremail@test.com"
    //         name="email"
    //         type="email"
    //         id="email"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="form-group flex-row space-between my-2">
    //       <label htmlFor="pwd">Password:</label>
    //       <Input
    //         className="form-control"
    //         placeholder="******"
    //         name="password"
    //         type={showPassword ? "text" : "password"}
    //         id="pwd"
    //         onChange={handleChange}
    //       />
    //       <Button className="ui secondary button" onClick={handleShowPassword}>
    //         {showPassword ? "Hide password" : "Show password"}
    //       </Button>
    //     </div>
    //     <div className="flex-row flex-end">
    //       <button type="submit" className="btn btn-primary mb-2">
    //         Submit
    //       </button>
    //     </div>
    //   </form>
    // </div>
  );
}

export default Signup;
