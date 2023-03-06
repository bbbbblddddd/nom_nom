/* eslint-disable no-unused-vars */
import { useState } from 'react';
import NavBar from '../NavBar';
const SignUp = ({ onSignUp }) => {
  const [stateName, setStateName] = useState('');
  const [stateEmail, setStateEmail] = useState('');
  const [statePassword, setStatePassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const handleName = (event) => {
    setStateName(event.target.value);
    setSubmitted(false);
  };
  const handleEmail = (event) => {
    setStateEmail(event.target.value);
    setSubmitted(false);
  };

  const handlePassword = (event) => {
    setStatePassword(event.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stateName === '' || stateEmail === '' || statePassword === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none'
        }}>
        <h1>User {stateName} successfully registered</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none'
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="flex h-72 min-h-screen flex-col justify-center bg-food_background2 p-10 text-center">
      <NavBar />
      <div className="mx-auto flex h-full w-4/6 justify-center rounded-3xl bg-[#fffffff3] px-12">
        <div className="h-40 flex-col justify-center">
          <h1 className="body-font animate__bounceInDown my-16 flex justify-center py-10 font-nomnombold text-9xl tracking-tight text-[#3E8B46] animate__animated">
            sign up
          </h1>
          <br />
          <br />
          <div className="messages">
            {errorMessage()}
            {successMessage()}
          </div>
          <div className="mx-auto flex h-60 w-full flex-col items-center justify-center">
            <form className="mx-auto flex h-60 w-full flex-col items-center justify-center">
              <label className="label">Name</label>
              <input
                onChange={handleName}
                placeholder="Enter your name"
                className="placeholder-center body-font mx-auto inline-flex w-full max-w-md rounded-md border-2 border-gray-400
              bg-[#D8F999] py-2 px-4 font-nunito focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#95C938]"
                value={stateName}
                type="text"
              />
              <br />

              <label className="label">Email</label>
              <input
                onChange={handleEmail}
                placeholder="Enter your email address"
                className="placeholder-center body-font mx-auto inline-flex w-full max-w-md rounded-md border-2 border-gray-400
              bg-[#D8F999] py-2 px-4 font-nunito focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#95C938]"
                value={stateEmail}
                type="email"
              />
              <br />

              <label className="label">Password</label>
              <input
                onChange={handlePassword}
                placeholder="Enter a password"
                className="placeholder-center body-font mx-auto mb-10 inline-flex w-full max-w-md rounded-md border-2 border-gray-400
                bg-[#D8F999] py-2 px-4 font-nunito focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#95C938]"
                value={statePassword}
                type="password"
              />
              <br />

              <button
                onClick={handleSubmit}
                className="body-font mx-auto inline-flex max-w-md rounded bg-[#3E8B46] py-2 px-4 font-nunito text-white hover:bg-[#95C938]"
                type="submit">
                Submit
              </button>
            </form>
            <p className="body-font mb-10 flex-col font-nunito">
              Already have an account?
              <br />
              <a
                href="/main/login"
                className="body-font inline-flex font-nunito font-bold text-[#3E8B46] hover:text-[#95C938] hover:underline">
                Login
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

export default SignUp;
