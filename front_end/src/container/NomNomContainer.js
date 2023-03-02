/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Login from '../components/user/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from '../components/Welcome';
import AllRecipes from '../components/recipes/AllRecipes';
import CreateRecipe from '../components/recipes/CreateRecipe';
import UserProfile from '../components/user/UserProfile';
import { useState, useEffect } from 'react';
import Request from '../helpers/Request';

const NomNomContainer = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [profile, setProfile] = useState([]);
  const [customRecipes, setCustomRecipes] = useState([]);
  const [allCustomRecipes, setAllCustomRecipes] = useState([]);
  const [allFaveRecipes, setAllFaveRecipes] = useState([]);

  // useEffect(() => {
  //   const request = new Request();

  //   const recipePromise = request.get('/api/recipes');

  //   Promise([allRecipePromise]).then((data) => {
  //     setAllRecipes(data[0]);
  //   });
  // }, []);

  // const findAllRecipesById = (id) => {
  //   return allRecipes.find((recipe) => {
  //     return recipe.id === parseInt(id);
  // })
  // }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/allrecipes" element={<AllRecipes />} />
          <Route path="/create" element={<CreateRecipe />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </>
  );
};

export default NomNomContainer;
