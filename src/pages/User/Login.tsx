import { FieldValues } from "react-hook-form";
import image from "../../assets/images/login.jpg"
import FormInput from "../../components/form/FormInput";
import ProvideForm from "../../components/form/ProvideForm";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../utils/Loading";
import { useLoginUserMutation } from "../../redux/user/userApi";
import { toast } from "sonner";
const Login = () => {
  const navigate = useNavigate()
  const [loginUser, { data, isLoading }] = useLoginUserMutation();


  console.log(data)
  if (isLoading) {
    return <Loading />
  }

  const onSubmit = async (data: FieldValues) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password
      }
      const res = await loginUser(userInfo).unwrap()
      console.log(res)
      if (res.success) {
        navigate(`/`)
      }
    } catch (error) {
      toast.error("something went wrong")
    }
  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full mx-auto lg:w-[800px] shadow-xl bg-white rounded-md flex text-[#0095ff]">
        <div className="w-6/12">
          <img src={image} alt="image" className="w-full h-full" />
        </div>
        <ProvideForm onSubmit={onSubmit}>
          <h1 className="text-4xl pb-4">Login</h1>
          <div className="space-y-5">
            <FormInput name="email" type="email" placeholder="Enter Your Email" level="Email" />
            <FormInput name="password" type="password" placeholder="Enter Your Password" level="Password" />
          </div>
          <button type="submit" className="py-2 px-5 mb-4 mt-8 overflow-hidden shadow-lg border-2 rounded-md border-dashed border-[#0095ff] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0095ff] before:hover:translate-x-0  before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0095ff] relative inline-block hover:text-white z-50">Submit</button>
          <p className="my-2 text-center text-gray-500 font-medium">Register an account? <Link to="/register" className="underline font-bold text-blue-600">Register</Link></p>
        </ProvideForm>
      </div>
    </div>
  )
};

export default Login;