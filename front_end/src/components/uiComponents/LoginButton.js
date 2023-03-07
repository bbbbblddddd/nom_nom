import React from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link to="/main/login">
      <button className="body-font rounded-full bg-[#EE5D3D] p-3 font-nunito text-[22px] font-bold text-white hover:bg-[#ff8266] hover:text-white">
        Login
      </button>
    </Link>
  );
};

export default LoginButton;
