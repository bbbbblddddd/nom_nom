import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <a href="#">
        <img className="rounded-t-lg" src={recipe.image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {recipe.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{recipe.description}</p>
        <a
          href="#"
          className="inline-flex items-center rounded-lg bg-[#EE5D3D] px-3 py-2 text-center text-sm font-medium text-white hover:bg-[#EE5D3D] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-[#EE5D3D] dark:hover:bg-[#EE5D3D] dark:focus:ring-blue-800">
          Read more
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
  );
};

export default Recipe;
