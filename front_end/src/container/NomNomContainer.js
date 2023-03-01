import Login from '../components/Login';
import Main from '../components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from '../components/Welcome';
import AllRecipes from '../components/AllRecipes';

const NomNomContainer = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/allrecipes" element={<AllRecipes />} />
        </Routes>
      </Router>
    </>
  );
};

export default NomNomContainer;
