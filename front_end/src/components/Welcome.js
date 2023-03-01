import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="relative flex h-72 min-h-screen flex-col justify-center bg-gradient-to-b from-orange-400 via-[#f4a134] to-yellow-300 p-10 text-center">
      <div className="flex h-40 justify-center">
        <h1 className="body-font animate__bounceInDown font-nomnom text-[140px] text-white animate__animated">
          nomnom.
        </h1>
      </div>
      <p className="animate__pulse animate__delay-2s body-font flex justify-center p-1 font-body text-3xl text-white animate__animated">
        Cooking made fun!
      </p>
      <br />
      <div className="flex justify-center pt-10">
        <p className="text-1xl mr-1 mt-0.5 font-nomnombold text-white">nomnom.</p>
        <p className="body-font text-1xl font-body text-white">
          is an educational app that turns cooking into a fun group activity between grown-up and
          and child.
        </p>
      </div>
      <br />
      <div className="z-0 mx-auto mb-20 inline-flex h-60 w-full items-center justify-center gap-20">
        <Link
          to="/login"
          className="body-font ... ease inline-flex h-56 w-56 flex-col items-center justify-center rounded-full bg-yellow-300 p-20 text-center font-nomnom text-2xl text-orange-500 shadow-xl transition delay-100 duration-200 ease-in-out hover:-translate-y-2 hover:scale-105 hover:bg-yellow-200">
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
          className="body-font ... ease inline-flex h-56 w-56 flex-col items-center justify-center rounded-full bg-yellow-300 p-20 text-center font-nomnom text-2xl text-orange-500 shadow-xl transition delay-100 duration-200 ease-in-out hover:-translate-y-2 hover:scale-105 hover:bg-yellow-200">
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
      <div>
        <img
          className="animate__bounceInLeft animate__delay-1s absolute left-12 -bottom-1 z-40 flex h-80 max-w-full animate__animated"
          src="https://nomnomcc.s3.amazonaws.com/nomnomwelcome.png"
          alt="chefs"
        />
      </div>
    </div>
  );
};

export default Welcome;
