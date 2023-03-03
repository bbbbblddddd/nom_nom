/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';

const Login = ({ onLogin }) => {
  const [stateEmail, setStateEmail] = useState('');
  const [statePassword, setStatePassword] = useState('');

  const handleEmail = (event) => {
    setStateEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setStatePassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const login = { email: stateEmail, password: statePassword };
    onLogin(login);
    setStateEmail('');
    setStatePassword('');
  };

  return (
    <div className="flex h-72 min-h-screen flex-col justify-center bg-food_background2 p-10 text-center">
      <div className="mx-auto flex h-5/6 w-4/6 justify-center rounded-3xl bg-[#fffffff3] px-12">
        <div className="h-40 flex-col justify-center">
          <h1 className="body-font animate__bounceInDown my-16 flex justify-center font-nomnombold text-9xl tracking-tight text-[#3E8B46] animate__animated">
            login
          </h1>
          <div className="mx-auto flex h-60 w-full flex-col items-center justify-center">
            <br />
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email:"
                className="placeholder-center body-font mx-auto inline-flex w-full max-w-md rounded-md border-2 border-gray-400 
         bg-[#cdf18b] py-2 px-4 font-nunito focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#95C938]"
                onChange={handleEmail}
                value={stateEmail}
              />
              <br />
              <input
                type="email"
                placeholder="Password:"
                className="placeholder-center body-font mx-auto mb-10 inline-flex w-full max-w-md rounded-md border-2 
         border-gray-400 py-2 px-4 font-nunito focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#95C938]"
                onChange={handlePassword}
                value={statePassword}
              />
              <button
                type="submit"
                className="body-font mx-auto inline-flex max-w-md rounded bg-[#3E8B46] py-2 px-4 font-nunito text-white hover:bg-[#95C938]">
                Login
              </button>
            </form>
            <br />
            <p className="body-font mb-10 flex-col font-nunito">
              Don't have an account?
              <br />
              <a
                href="#"
                className="body-font inline-flex font-nunito font-bold text-[#3E8B46] hover:text-[#95C938] hover:underline">
                Sign up
              </a>
              <br />
              <br />
              <a
                href="/"
                className="body-font inline-flex font-nunito text-[#3E8B46] hover:text-[#95C938] hover:underline">
                Back
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
