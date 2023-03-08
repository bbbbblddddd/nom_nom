import React from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link to="/main/login">
      <button className="group relative px-6 py-3 font-nunito text-xl text-white">
        <span className="absolute inset-0 h-full w-full translate-x-0 -skew-x-12 transform bg-[#EE5D3D] transition-all duration-300 ease-out group-hover:skew-x-12 group-hover:bg-[#ff5e3a]"></span>
        <span className="absolute inset-0 h-full w-full skew-x-12 transform bg-[#EE5D3D] transition-all duration-300 ease-out group-hover:-skew-x-12 group-hover:bg-[#ff8266]"></span>
        <span className="absolute bottom-0 left-0 hidden h-20 w-10 -translate-x-8 translate-y-10 -rotate-12 transform bg-[#EE5D3D] transition-all duration-100 ease-out"></span>
        <span className="absolute bottom-0 right-0 hidden h-20 w-10 translate-x-10 translate-y-8 -rotate-12 transform bg-[#ff5e3a] transition-all duration-100 ease-out"></span>
        <span className="relative">Login</span>
      </button>
    </Link>
  );
};

export default LoginButton;
