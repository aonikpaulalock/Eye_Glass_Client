import { Link } from "react-router-dom";
import image from "../../assets/images/login.jpg"
const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full mx-auto lg:w-[800px] shadow-xl bg-white rounded-md flex text-[#0095ff]">
        <div className="w-6/12">
          <img src={image} alt="image" className="w-full h-full" />
        </div>
        <form className="p-6 flex-1">
          <h1 className="text-4xl pb-4">Login</h1>
          <div className="space-y-5">
            <label htmlFor="email" className="block">Email</label>
            <input id="email" type="email" placeholder="Enter Your Email" className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#0095ff]" />
            <label htmlFor="password" className="block">Password</label>
            <input id="password" type="password" placeholder="Enter password" className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-[#0095ff]" />
          </div>
          <p className="mt-3 text-center text-gray-500 font-medium">Already have an account? <Link to="/register" className="underline font-bold text-blue-600">Register</Link></p>
          <button type="button" className="py-2 px-5 mb-4 mt-8 overflow-hidden shadow-lg border-2 rounded-md border-dashed border-[#0095ff] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0095ff] before:hover:translate-x-0  before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0095ff] relative inline-block hover:text-white z-50">Submit</button>
        </form>
      </div>
    </div>
  )
};

export default Login;