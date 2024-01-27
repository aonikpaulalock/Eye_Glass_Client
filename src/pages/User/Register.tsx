import image from "../../assets/images/login.jpg"
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/form/FormInput";
import ProvideForm from "../../components/form/ProvideForm";
import { FieldValues } from "react-hook-form";
import Loading from "../../utils/Loading";
import { useRegisterUserMutation } from "../../redux/features/user/userApi";
const Register = () => {
  const navigate = useNavigate()
  const [userRegister, { data, isLoading }] = useRegisterUserMutation()
  console.log(data)
  if (isLoading) {
    return <Loading />
  }
  const onSubmit = async (data: FieldValues) => {
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password
      }
      const res = await userRegister(userInfo).unwrap()
      if (res.success) {
        navigate(`/login`)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full mx-auto lg:w-[800px] shadow-xl bg-white rounded-md flex text-[#0095ff]">
        <div className="w-6/12">
          <img src={image} alt="image" className="w-full h-full" />
        </div>
        <ProvideForm onSubmit={onSubmit}>
          <h1 className="text-4xl pb-4">Register</h1>
          <div className="space-y-5">
            <FormInput name="name" type="name" placeholder="Enter your name" level="Name" />
            <FormInput name="email" type="email" placeholder="Enter Your Email" level="Email" />
            <FormInput name="password" type="password" placeholder="Enter Your Password" level="Password" />
          </div>
          <button type="submit" className="py-2 px-5 mb-4 mt-8 overflow-hidden shadow-lg border-2 rounded-md border-dashed border-[#0095ff] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0095ff] before:hover:translate-x-0  before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0095ff] relative inline-block hover:text-white z-50">Submit</button>
          <p className="my-2 text-center text-gray-500 font-medium">Already have an account? <Link to="/login" className="underline font-bold text-blue-600">Login</Link></p>
        </ProvideForm>
      </div>
    </div>
  )
};

export default Register;