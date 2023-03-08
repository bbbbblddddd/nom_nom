/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import NavBar from "../NavBar";
import SignUpButton from "../uiComponents/SignUpButton";

const Login = ({ onLogin }) => {
  const [stateEmail, setStateEmail] = useState("");
  const [statePassword, setStatePassword] = useState("");

  const handleEmail = (event) => {
    setStateEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setStatePassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const login = [stateEmail, statePassword];
    onLogin(login);
    setStateEmail("");
    setStatePassword("");
  };

  return (
    <div className="flex h-72 min-h-screen flex-col justify-center bg-food_background2 p-10 text-center">
      <NavBar />
      <div className="mx-auto flex h-full w-4/6 justify-center rounded-3xl bg-[#fffffff3] px-12">
        <div className="h-40 flex-col justify-center">
          <h1 className="body-font animate__bounceInDown mt-16 flex justify-center font-nomnombold text-9xl tracking-tight text-[#3E8B46] animate__animated">
            login
          </h1>
          <p className="mt-10 font-nexabold text-xl text-gray-700">
            Please login to access our extended features, like
          </p>
          <div className="align-center inline-flex-row">
            <p className="font-nexabold text-xl text-[#3E8B46]">
              saving recipes to your profile!
            </p>
          </div>
          <br />
          <div className="mx-auto mt-10 flex h-60 w-full flex-col items-center justify-center">
            <br />
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email:"
                className="placeholder-center body-font mx-auto inline-flex w-full max-w-md rounded-md border-2 border-transparent bg-[#d8f999] 
              py-2 px-4 font-nunito text-lg focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#95C938]"
                onChange={handleEmail}
                value={stateEmail}
              />
              <br />
              <br />
              <input
                type="text"
                placeholder="Password:"
                className="placeholder-center body-font mx-auto mb-10 inline-flex w-full max-w-md rounded-md border-2 border-transparent bg-[#d8f999]
                py-2 px-4 font-nunito text-lg focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#95C938]"
                onChange={handlePassword}
                value={statePassword}
              />
              <button
                type="submit"
                className="body-font hover:scale-102 mx-auto inline-flex max-w-md rounded-lg bg-[#3E8B46] py-2 px-4 font-nunito text-xl text-white shadow-xl transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:bg-[#95C938]"
              >
                Login
              </button>
            </form>
            <br />
            <p className="body-font flex-col font-nunito">
              Don't have an account?
              <br />
              <SignUpButton />
              <br />
              <br />
              <a
                href="/"
                className="body-font inline-flex font-nunito text-[#3E8B46] hover:text-[#95C938] hover:underline"
              >
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
