import React from 'react';
import { Link } from 'react-router-dom';
import Auth from "../../utils/auth";

const DropdownNav = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-yellow-500'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link to='/' className='p-4'>
        Home
      </Link>
      {Auth.loggedIn() ? (
        <>
        <Link to='/create-recipe' className='p-4'>
          Create Recipe
        </Link>
        <Link to='/profile' className='p-4'>
          Profile
        </Link>
        <Link to='/' onClick={Auth.logout} className='p-4'>
          Logout
        </Link>
        </>
      ) : (
        <>
        <Link to='/signup' className='p-4'>
          Signup
        </Link>
        <Link to='/login' className='p-4'>
          Login
        </Link>
        </>
      )
      }
    </div>
  );
};

export default DropdownNav;