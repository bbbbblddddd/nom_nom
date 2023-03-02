/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const AllRecipes = ({ recipes }) => {
  const recipeList = recipes.map((recipe, index) => {
    return <li key={index}>{recipe.name}</li>;
  });

  return <></>;
};

export default AllRecipes;
