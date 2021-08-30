import React, { useState } from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

function Nav({ toggle }) {
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <nav
    className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'
    role='navigation'
  >
    <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M4 6h16M4 12h16M4 18h16'
        />
      </svg>
    </div>
    <div className='pr-8 md:block  hidden'>
      <Link to='/' className='p-4 hover:bg-yellow-300'>
        Home
      </Link>
      {Auth.loggedIn() ? (
        <>
        <Link to='/create-recipe' className='p-4 hover:bg-yellow-300'>
          Create Recipe
        </Link>
        <Link to='/profile' className='p-4 hover:bg-yellow-300'>
          Profile
        </Link>
        <Link to='/' onClick={Auth.logout} className='p-4 hover:bg-yellow-300'>
          Logout
        </Link>
        </>
      ) : (
        <>
        <Link to='/signup' className='p-4 hover:bg-yellow-300'>
          Signup
        </Link>
        <Link to='/login' className='p-4 hover:bg-yellow-300'>
          Login
        </Link>
        </>
      )
      }
    </div>
  </nav>
  );
}

export default Nav;
