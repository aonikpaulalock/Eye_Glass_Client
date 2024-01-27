import { FieldValues } from "react-hook-form";
import image from "../../assets/images/add.png"
import FormInput from "../../components/form/FormInput";
import ProvideForm from "../../components/form/ProvideForm";
const onSubmit = async (data: FieldValues) => {
  console.log(data)
}
const AddProduct = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full mx-auto h-full bg-slate-800 flex text-[#0095ff]">
        <div className="w-6/12">
          <img src={image} alt="image" className="w-full h-full" />
        </div>
        <ProvideForm onSubmit={onSubmit}>
          <h1 className="text-4xl pb-4 font-medium">Add Product</h1>
          <div className="space-y-5">
            <div className="md:flex md:space-x-3">
              <FormInput name="name" type="name" placeholder="Enter your name" level="Name" />
              <FormInput name="name" type="name" placeholder="Enter your name" level="Name" />
            </div>
            <div className="md:flex md:space-x-3">
              <FormInput name="email" type="email" placeholder="Enter Your Email" level="Email" />
              <FormInput name="password" type="password" placeholder="Enter Your Password" level="Password" />
            </div>
            <div className="md:flex md:space-x-3">
              <FormInput name="email" type="email" placeholder="Enter Your Email" level="Email" />
              <FormInput name="password" type="password" placeholder="Enter Your Password" level="Password" />
            </div>
            <div className="md:flex md:space-x-3">
              <FormInput name="email" type="file" placeholder="Enter Your Email" level="Email" />
              <FormInput name="password" type="password" placeholder="Enter Your Password" level="Password" />
            </div>
          </div>
          <button type="submit" className="py-2 px-5 mb-4 mt-8 overflow-hidden shadow-lg border-2 rounded-md border-dashed border-[#0095ff] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0095ff] before:hover:translate-x-0  before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0095ff] relative inline-block hover:text-white z-50">Submit</button>
        </ProvideForm>
      </div>
    </div>
  )
};

export default AddProduct;