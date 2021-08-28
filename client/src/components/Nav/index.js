import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Menu, Segment } from "semantic-ui-react";

import Auth from "../../utils/auth";

// front end
//import 'materialize-css/dist/css/materialize.min.css'
//import 'materialize-css';
//import { Navbar , NavItem , Icon } from 'react-materialize';

function Nav({ toggle }) {
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    // <div style={{padding: "2rem 0"}}>
    //   <Menu pointing>
    //     <Menu.Item
    //       name="foodbook"
    //       active={activeItem === "foodbook"}
    //       onClick={handleItemClick}
    //       as={Link}
    //       to="/"
    //     />
    //     {Auth.loggedIn() ? (
    //       <>
    //       <Menu.Item
    //       name="create-recipe"
    //       active={activeItem === "create-recipe"}
    //       onClick={handleItemClick}
    //       as={Link}
    //       to="/create-recipe"
    //     />
    //     <Menu.Item
    //       name="profile"
    //       active={activeItem === "profile"}
    //       onClick={handleItemClick}
    //       as={Link}
    //       to="/profile"
    //     />
    //     <Menu.Item
    //       name="logout"
    //       onClick={Auth.logout}
    //       to="/"
    //     />
    //     </>
    //     ) : (
    //       <>
    //       <Menu.Item
    //       name="signup"
    //       active={activeItem === "signup"}
    //       onClick={handleItemClick}
    //       as={Link}
    //       to="/signup"
    //     />
    //     <Menu.Item
    //       name="login"
    //       active={activeItem === "login"}
    //       onClick={handleItemClick}
    //       as={Link}
    //       to="/login"
    //     /></>
    //     )}
    //     <Menu.Menu position="right">
    //       <Menu.Item>
    //         <Input icon="search" placeholder="Search..." />
    //       </Menu.Item>
    //     </Menu.Menu>
    //   </Menu>
    // </div>
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
