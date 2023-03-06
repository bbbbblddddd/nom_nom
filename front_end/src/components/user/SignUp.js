/* eslint-disable no-unused-vars */
import { useState } from 'react';
import NavBar from '../NavBar';
const SignUp = ({ onSignUp }) => {
  const [stateName, setStateName] = useState('');
  const [stateEmail, setStateEmail] = useState('');
  const [statePassword, setStatePassword] = useState('');
  const handleName = (event) => {
    setStateName(event.target.value);
  };
  const handleEmail = (event) => {
    setStateEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setStatePassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: stateName,
      email: stateEmail,
      password: statePassword
    };
    onSignUp(user);
    setStateName('');
    setStateEmail('');
    setStatePassword('');
  };

  return (
    <div className="flex h-72 min-h-screen flex-col justify-center bg-food_background2 p-10 text-center">
      <NavBar />
      <div className="mx-auto flex h-5/6 w-4/6 justify-center rounded-3xl bg-[#fffffff3] px-12">
        <div className="h-40 flex-col justify-center">
          <h1 className="body-font animate__bounceInDown my-16 flex justify-center font-nomnombold text-9xl tracking-tight text-[#3E8B46] animate__animated">
            sign up
          </h1>
          <div className="mx-auto flex h-60 w-full flex-col items-center justify-center">
            <br />
            <form>
              <input
                type="text"
                placeholder="Name:"
                className="placeholder-center body-font mx-auto inline-flex w-full max-w-md rounded-md border-2 border-gray-400
              bg-[#D8F999] py-2 px-4 font-nunito focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#95C938]"
                onChange={handleName}
                value={stateName}
              />
              <br />
              <br />
              <input
                type="email"
                placeholder="Email:"
                className="placeholder-center body-font mx-auto inline-flex w-full max-w-md rounded-md border-2 border-gray-400
              bg-[#D8F999] py-2 px-4 font-nunito focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#95C938]"
                onChange={handleEmail}
                value={stateEmail}
              />
              <br />
              <br />
              <input
                type="password"
                placeholder="Password:"
                className="placeholder-center body-font mx-auto mb-10 inline-flex w-full max-w-md rounded-md border-2 border-gray-400
                bg-[#D8F999] py-2 px-4 font-nunito focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#95C938]"
                onChange={handlePassword}
                value={statePassword}
              />
              <button
                type="submit"
                className="body-font mx-auto inline-flex max-w-md rounded bg-[#3E8B46] py-2 px-4 font-nunito text-white hover:bg-[#95C938]">
                Sign Up
              </button>
            </form>
            <br />
            <p className="body-font mb-10 flex-col font-nunito">
              Already have an account?
              <br />
              <a href="/login" className="body-font inline-flex font-nunito">
                Login
              </a>
              <a href="/" className="body-font inline-flex font-nunito">
                Back
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
