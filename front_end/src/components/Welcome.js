import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="flex h-72 min-h-screen flex-col justify-center bg-gradient-to-b from-rose-300 to-yellow-200 p-10 text-center">
      <h1 className="body-font animate__bounceInDown font-heading text-9xl text-rose-600 animate__animated">
        NomNom
      </h1>
      <br />
      <div className="flex justify-center">
        <p className="body-font p-1 font-body text-3xl">Cooking</p>
        <p className="body-font p-1 font-body text-3xl">made</p>
        <p className="body-font p-1 font-body text-3xl">fun!</p>
      </div>
      <br />
      <p className="body-font text-1xl font-body">
        NomNom is an educational app that turns cooking into a fun group activity between parent and
        child!
      </p>
      <br />
      <div className="align-center mx-auto flex justify-center gap-20">
        <Link
          to="/login"
          className="body-font p-15 h-52 w-52 rounded-full bg-[#ffe979] text-center font-body text-2xl hover:bg-[chefHat]">
          Login
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </Link>
        <Link
          to="/main"
          className="body-font p-15 w-40 rounded-full bg-[#fae370] text-center font-body text-2xl">
          Take a Look
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
