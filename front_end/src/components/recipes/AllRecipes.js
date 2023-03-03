import React from 'react';
import Recipe from './Recipe';

const AllRecipes = ({ allRecipes }) => {
  const recipeList = allRecipes.map((recipe, index) => {
    return (
      <li key={index}>
        <div>
          <Recipe recipe={recipe} />
        </div>
      </li>
    );
  });
  return (
    <>
      <ul>{recipeList}</ul>
    </>
  );
};

export default AllRecipes;
