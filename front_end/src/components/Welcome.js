import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <h1>NomNom</h1>
      <p>Cooking made fun!</p>
      <br />
      <p>
        NomNom is an educational app that turns cooking into a fun group activity between parent and
        child!
      </p>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/main">Take a Look</Link>
    </>
  );
};

export default Welcome;
