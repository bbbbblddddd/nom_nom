/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Recipe from './Recipe.js';

const AllRecipes = ({ recipes }) => {
  const recipeList = recipes.map((recipe, index) => {
    return <li key={index}>{recipe.name}</li>;
  });

  return <ul>{recipeList}</ul>;
};

export default AllRecipes;
