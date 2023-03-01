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
      <div className="mx-auto inline-flex h-80 w-full items-center justify-center gap-20">
        <Link
          to="/login"
          className="body-font ... ease inline-flex h-56 w-56 flex-col items-center justify-center rounded-full bg-yellow-300 p-20 text-center font-nomnom text-2xl text-orange-500 transition delay-100 duration-200 ease-in-out hover:-translate-y-2 hover:scale-105 hover:bg-yellow-200">
          Login
          <br />
          <div className="mt-auto p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="inline-flex h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </div>
        </Link>
        <Link
          to="/main"
          className="body-font ... ease inline-flex h-56 w-56 flex-col items-center justify-center rounded-full bg-yellow-300 p-20 text-center font-nomnom text-2xl text-orange-500 transition delay-100 duration-200 ease-in-out hover:-translate-y-2 hover:scale-105 hover:bg-yellow-200">
          Search
          <br />
          Recipes
          <br />
          <div className="mt-auto p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
