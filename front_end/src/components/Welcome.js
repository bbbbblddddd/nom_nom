import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="flex h-72 min-h-screen flex-col justify-center bg-gradient-to-b from-orange-400 to-yellow-300 p-10 text-center">
      <h1 className="body-font animate__bounceInDown font-nomnom text-9xl text-white animate__animated">
        nomnom.
      </h1>
      <div className="flex justify-center">
        <p className="body-font animate__pulse p-1 font-body text-3xl animate__animated">
          Cooking made fun!
        </p>
      </div>
      <br />
      <p className="body-font text-1xl font-body">
        NomNom is an educational app that turns cooking into a fun group activity between parent and
        child!
      </p>
      <br />
      <div className="mx-auto inline-flex h-64 w-64 items-center justify-center gap-20">
        <Link
          to="/login"
          className="body-font ... ease inline-flex h-48 w-48 items-center justify-center rounded-full bg-yellow-300 p-20 text-center font-body text-2xl text-orange-500 transition delay-100 duration-200 ease-in-out hover:-translate-y-2 hover:scale-105 hover:bg-yellow-200">
          Login
        </Link>
        <Link
          to="/main"
          className="body-font ... ease inline-flex h-48 w-48 items-center justify-center rounded-full bg-yellow-300 p-20 text-center font-body text-2xl text-orange-500 transition delay-100 duration-200 ease-in-out hover:-translate-y-2 hover:scale-105 hover:bg-yellow-200">
          View
          <br />
          Recipes
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
