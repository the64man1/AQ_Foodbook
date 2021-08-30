import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login() {
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
    );   
};

export default Login;