import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className=" flex justify-center items-center min-h-screen">
        <div className="bg-gray-700 rounded-lg p-8 shadow-2xl max-w-sm w-full">
          <h2 className="text-center text-3xl text-white mb-6 font-bold">Login</h2>
          <form action="">
            <div className="mb-4 ">
              <label htmlFor="" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input type="email" className="w-full px-3 py-2 bg-gray-50 rounded-md text-white focus:outline-none focus:ring-blue-500"/>
            </div>
            <div className="mb-4">
              <label htmlFor="" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input type="password" className="w-full px-3 py-2 bg-gray-50 rounded-md text-white focus:outline-none focus:ring-blue-500"/>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 shadow-lg">login</button>
          </form>
        </div>
    </div>
    </>
  );
}

export default App;
