const Login = () => {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&family=Nunito:wght@700;800&display=swap"
          rel="stylesheet"></link>
      </head>
      <body>
        <div className="flex h-72 min-h-screen flex-col justify-center bg-gradient-to-b from-orange-400 to-yellow-300 p-10 text-center">
          <h1 className="body-font animate__bounceInDown font-nomnom text-9xl text-white animate__animated">
            Login
          </h1>
          <br />
          <input
            type="email"
            placeholder="Enter your email address:"
            className="placeholder-center mx-auto w-full max-w-md rounded-md border-2 
         border-gray-400 py-2 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <br />
          <input
            type="email"
            placeholder="Password:"
            className="placeholder-center mx-auto w-full max-w-md rounded-md border-2 
         border-gray-400 py-2 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="mx-auto max-w-md rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
            Login
          </button>
          <br />
          <p>
            Don't have an account?
            <a href="#" className="font-bold text-blue-500 hover:text-red-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </body>
    </>
  );
};

export default Login;
