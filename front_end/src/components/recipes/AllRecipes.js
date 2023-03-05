import React from 'react';
import NavBar from '../NavBar';
import Recipe from './Recipe';

const AllRecipes = ({ allRecipes }) => {
  const recipeList = allRecipes.map((recipe, index) => {
    return (
      <li key={index}>
        <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-100 dark:bg-white">
          <img className="rounded-t-lg" src={recipe.image} alt={recipe.name} />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {recipe.name}
            </h5>
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-[#EE5D3D] px-3 py-2 text-center text-sm font-medium text-white hover:bg-[#EE5D3D] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-[#EE5D3D] dark:hover:bg-[#EE5D3D] dark:focus:ring-blue-800">
              <Recipe recipe={recipe} />
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="flex h-72 min-h-screen flex-col justify-center bg-food_background3 bg-cover bg-fixed p-10 text-center">
      <NavBar />
      <div className="mx-auto flex h-5/6 w-4/6 justify-center rounded-3xl bg-[#fffffff3] px-12">
        <div className="h-40 flex-col justify-center">
          <h1 className="body-font animate__bounceInDown my-16 flex justify-center font-nomnombold text-9xl tracking-tight text-[#EE5D3D] animate__animated">
            recipes
          </h1>
          <ul className="grid grid-cols-2 gap-4">{recipeList}</ul>
          <br />
          <a
            href="/"
            className="body-font inline-flex font-nunito text-[#EE5D3D] hover:text-[#ed7156] hover:underline">
            Back
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllRecipes;
