import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <>
          <Link to="/main">Home</Link>
          <Link to="/login">Login</Link>
          </>
    );
  }
  
  export default NavBar;
