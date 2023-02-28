import NavBar from './NavBar';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <NavBar />
      <h1>I&apos;m the Main Page</h1>
      <p>I will contain all recipes and links to anything else we make!</p>
      <Link to="/allrecipes">List of All Recipes</Link>
    </>
  );
};

export default Main;
