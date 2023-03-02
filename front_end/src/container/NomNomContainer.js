import Login from '../components/user/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from '../components/Welcome';
import AllRecipes from '../components/recipes/AllRecipes';
import CreateRecipe from '../components/CreateRecipe';
import UserProfile from '../components/UserProfile';

const NomNomContainer = () => {
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
