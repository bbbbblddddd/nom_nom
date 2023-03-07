/* eslint-disable no-unused-vars */
import Login from "../components/user/Login";
import { Routes, Route, useParams } from "react-router-dom";
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
  const [selectedRecipe, setSelectedRecipe] = useState(null);

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

  const onDeleteAccount = (profileToDelete) => {
    const id = profileToDelete.id;
    const request = new Request();
    const url = "/api/users/" + id;

    request.delete(url).then(() => {
      window.location = "/signup";
    });
  };

  const onRecipeRemoved = (recipeToRemove) => {
    const copyProfile = { ...profile };
    copyProfile.recipes = copyProfile.recipes.filter(
      (recipe) => recipe !== recipeToRemove
    );
    setProfile(copyProfile);
  };
  // const request = new Request();

  // request.post("/api/recipes", recipe).then(() => {
  //   window.location = "/main/recipes";
  // });
  // };

  const findRecipeById = (id) => {
    let foundRecipe = "";
    for (let recipe of allRecipes) {
      if (recipe.id === parseInt(id)) {
        foundRecipe = recipe;
      }
    }
    console.log("foundRecipe", foundRecipe);
    setSelectedRecipe(foundRecipe);
  };

  // const findRecipeById = (id) => {
  //   return allRecipes.find((recipe) => {
  //     console.log("recipe.id", recipe.id);
  //     return recipe.id === parseInt(id);
  //   });
  // };

  const RecipeDetailWrapper = () => {
    const { id } = useParams();
    let foundRecipe = findRecipeById(id);
    return <RecipeDetail recipe={selectedRecipe} />;
  };

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleGetUser} />} />
        <Route path="/signup" element={<SignUp onSignUp={handlePostUser} />} />
        {selectedRecipe ? (
          <Route path="/recipes/:id" element={<RecipeDetailWrapper />} />
        ) : null}

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
        <Route
          path="/profile"
          element={
            <UserProfile
              profile={profile}
              onRecipeRemoved={onRecipeRemoved}
              onDeleteAccount={onDeleteAccount}
            />
          }
        />
      </Routes>
    </>
  );
};

export default NomNomContainer;
