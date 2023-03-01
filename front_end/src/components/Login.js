const Login = () => {


  return (
    <>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&family=Nunito:wght@700;800&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <div class="flex h-72 min-h-screen flex-col justify-center bg-gradient-to-b from-orange-400 to-yellow-300 p-10 text-center">
          <h1 className="body-font animate__bounceInDown font-nomnom text-9xl text-white animate__animated">
            Login
          </h1>
          <br />
          <input type="email" placeholder="Enter your email address:" class="border-2 border-gray-400 rounded-md py-2 px-4 w-full 
         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent max-w-md mx-auto placeholder-center"/>
          <br />
          <input type="email" placeholder="Password:" class="border-2 border-gray-400 rounded-md py-2 px-4 w-full 
         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent max-w-md mx-auto placeholder-center"/>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-md mx-auto">
            Login
          </button>
          <br />
          <p>Don't have an account?
            <a href="#" class="font-bold text-blue-500 hover:text-red-600 hover:underline">Sign up</a>
          </p>
        </div>
      </body>
    </>
  );
};

export default Login;
