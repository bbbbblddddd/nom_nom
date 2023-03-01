import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Link to="/allrecipes">Home</Link>
      <Link to="/reviews">Reviews</Link>
      <Link to="/create">Create Recipe</Link>
    </>
  );
};

export default NavBar;
