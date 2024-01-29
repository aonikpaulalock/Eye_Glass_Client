import image from "../assets/images/login.jpg"
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppDispatch } from "../redux/hooks";
import { setRegister } from "../redux/features/register/registerSlice";
import { useRegisterMutation } from "../redux/features/register/registerApi";
import ProvideForm from "../components/Form/ProvideForm";
import FormInput from "../components/Form/FormInput";
import Loading from "../utils/Loading";

const Register = () => {
  const dispatch = useAppDispatch();
  const [registerUser, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  if (isLoading) {
    return <Loading />
  }
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Please wait...");
    try {
      console.log({ data });
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      dispatch(
        setRegister({
          name: data.name,
          email: data.email,
          password: data.password,
        })
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res: any = await registerUser(userInfo);

      if (res?.error?.data) {
        toast.error(`${data.email} Already used`, {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.success("Registration successful!", {
          id: toastId,
          duration: 2000,
        });
        navigate("/login");
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
  };

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
  );
};

export default Register;
