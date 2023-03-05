import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe }) => {
  const url = '/main/recipes/' + recipe.id;
  return (
    <p>
      <Link to={url} state={recipe}>
        {recipe.name}
      </Link>
    </p>
  );
};

export default Recipe;
