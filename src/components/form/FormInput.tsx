import { useFormContext } from "react-hook-form";


type TUserInput = {
  name: string;
  type: string;
  placeholder: string;
  level: string;
}

const FormInput = ({ name, type, placeholder, level }: TUserInput) => {
  const { register } = useFormContext()
  return (
    <div>
      <label htmlFor={name} className="block">{level}</label>
      <input id={name} type={type} placeholder={placeholder} className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#0095ff]"  {...register(name)}/>
    </div>
  )
};

export default FormInput;