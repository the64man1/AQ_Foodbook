import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const { data } = await login({
          variables: { email: formState.email, password: formState.password },
        });
        const token = data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    return (
      <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-3/4">
                    <h1 class="mb-8 text-3xl text-center">Log In</h1>
                    <input 
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        type="email"
                        id="email"
                        placeholder="username@email.com"
                        onChange={handleChange} />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        id="password"
                        placeholder="password"
                        onChange={handleChange} />


                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleFormSubmit}>
                      Log In
                    </button>
                </div>

                <div class="text-white mt-6">
                    Need an account? 
                    <a class="no-underline border-b border-blue text-blue" href="/signup">
                        Sign Up
                    </a>.
                </div>
            </div>
        </div>
//       <div class="w-full max-w-xs my-4">
//   <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleFormSubmit}>
//     <div class="mb-4">
//       <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
//         Email
//       </label>
//       <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="name@email.com" onChange={handleChange} />
//     </div>
//     <div class="mb-6">
//       <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
//         Password
//       </label>
//       <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="password" placeholder="***********" onChange={handleChange}/>
//     </div>
//     {error ? (
//             <div>
//               <p className="text-red-600 mb-3">Credentials are incorrect</p>
//             </div>
        
//         ) : null}
//     <div class="flex items-center justify-between">
//       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
//         Sign In
//       </button>
//     </div>
//   </form>
// </div>

      // <div className="container my-1">
      //   <Link to="/signup">← Go to Signup</Link>
  
      //   <h2>Login</h2>


      //   <form className ="form-group" onSubmit={handleFormSubmit}>
      //     <div className="flex-row space-between my-2">
      //       <label htmlFor="email" className="mr-sm-2">Email address:</label>
      //       <input
      //         className="form-control mb-2 mr-sm-2"
      //         placeholder="youremail@test.com"
      //         name="email"
      //         type="email"
      //         id="email"
      //         onChange={handleChange}
      //       />
      //     </div>
      //     <div className="flex-row space-between my-2">
      //       <label htmlFor="pwd" className="mr-sm-2">Password:</label>
      //       <input
      //       className="form-control mb-2 mr-sm-2"
      //         placeholder="******"
      //         name="password"
      //         type="password"
      //         id="pwd"
      //         onChange={handleChange}
      //       />
      //     </div>
        //   {error ? (
        //     <div>
        //       <p className="error-text">The provided credentials are incorrect</p>
        //     </div>
        
        // ) : null}
      //   <br /> 
      //       <button type="submit" className="btn form-inline btn-primary mb-2">Submit</button>
          
      //   </form>
      // </div>
    );   
};

export default Login;