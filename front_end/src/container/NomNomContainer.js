/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Login from '../components/user/Login';
import { Routes, Route } from 'react-router-dom';
import AllRecipes from '../components/recipes/AllRecipes';
import UserProfile from '../components/user/UserProfile';
import { useState, useEffect } from 'react';
import Request from '../helpers/Request';
import NewCustomRecipe from '../components/customRecipes/NewCustomRecipe';
import RecipeDetail from '../components/recipes/RecipeDetail';

const NomNomContainer = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [profile, setProfile] = useState([]);
  const [customRecipes, setCustomRecipes] = useState([]);
  const [allCustomRecipes, setAllCustomRecipes] = useState([]);
  const [allFaveRecipes, setAllFaveRecipes] = useState([]);

  useEffect(() => {
    const request = new Request();

    const recipePromise = request.get('/api/recipes');

    // Promise([allRecipePromise]).then((data) => {
    recipePromise.then((data) => {
      setAllRecipes(data);
    });
  }, []);
  const handlePost = (user) => {
    const request = new Request();

    request.post('/api/users', user).then(() => {
      window.location = '/profile';
    });
  };

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/recipes" element={<AllRecipes allRecipes={allRecipes} />} />
        <Route path="/create" element={<NewCustomRecipe />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
      </Routes>
    </>
  );
};

export default NomNomContainer;
