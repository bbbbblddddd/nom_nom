import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe }) => {
  const url = '/recipes/' + recipe.id;
  return (
    <p>
      <Link to={url}>{recipe.name}</Link>
    </p>
  );
};

export default Recipe;
