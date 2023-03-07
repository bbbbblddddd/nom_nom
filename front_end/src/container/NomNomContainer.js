/* eslint-disable no-unused-vars */
import Login from "../components/user/Login";
import { Routes, Route } from "react-router-dom";
import AllRecipes from "../components/recipes/AllRecipes";
import UserProfile from "../components/user/UserProfile";
import { useState, useEffect } from "react";
import Request from "../helpers/Request";
import RecipeDetail from "../components/recipes/RecipeDetail";
import CreateRecipe from "../components/create/CreateRecipe";
import SignUp from "../components/user/SignUp";

const NomNomContainer = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [profile, setProfile] = useState({});
  const [newRecipe, setNewRecipe] = useState({});
  const [selectedRecipe, setSelectedRecipe] = useState({});

  useEffect(() => {
    const request = new Request();

    const recipePromise = request.get("/api/recipes");

    // Promise([allRecipePromise]).then((data) => {
    recipePromise.then((data) => {
      setAllRecipes(data);
    });
  }, []);

  const handlePostUser = (user) => {
    const request = new Request();

    const userPromise = request.post("/api/users", user);
    userPromise.then((data) => {
      setProfile(data);
    });
  };

  const handleGetUser = (user) => {
    const request = new Request();
    const email = encodeURIComponent(user[0]);
    const password = encodeURIComponent(user[1]);
    const url = `/api/user?email=${email}&password=${password}`;
    const userPromise = request.get(url);
    userPromise.then((data) => {
      setProfile(data);
    });
  };

  const onRecipeSelected = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const onRecipeSave = (recipe) => {
    setNewRecipe(recipe);
    const request = new Request();

    request.post("/api/recipes", recipe).then(() => {
      window.location = "/main/recipes";
    });
  };

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleGetUser} />} />
        <Route path="/signup" element={<SignUp onSignUp={handlePostUser} />} />
        <Route
          path="/recipes/:id"
          element={<RecipeDetail recipe={selectedRecipe} />}
        />

        <Route
          path="/recipes"
          element={
            <AllRecipes
              allRecipes={allRecipes}
              selectedRecipe={selectedRecipe}
              onRecipeSelected={onRecipeSelected}
            />
          }
        />
        <Route
          path="/create"
          element={<CreateRecipe onRecipeSave={onRecipeSave} />}
        />
        <Route path="/profile" element={<UserProfile profile={profile} />} />
      </Routes>
    </>
  );
};

export default NomNomContainer;
