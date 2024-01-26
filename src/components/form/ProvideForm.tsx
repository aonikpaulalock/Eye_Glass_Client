import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TUserProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode,
}
const ProvideForm = ({ onSubmit, children }: TUserProps) => {
  const methods = useForm()
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="p-6 flex-1">
        {children}
      </form>
    </FormProvider>
  )
};

export default ProvideForm;