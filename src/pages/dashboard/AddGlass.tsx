import { Button, Input } from "@material-tailwind/react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAddEyeGlassMutation } from "../../redux/features/product/eyeGlassApi";
import Loading from "../../utils/Loading";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
const imageBb_Api = "ab44083a680f1ff8d7a143435888c291";

const AddGlass = () => {
  const imagebbApi = `https://api.imgbb.com/1/upload?key=${imageBb_Api}`;

  const { register, handleSubmit, reset } = useForm();
  const [addGlass, { isLoading }] = useAddEyeGlassMutation();
  const user = useAppSelector(selectCurrentUser);

  if (isLoading) {
    return <Loading />
  }

  const onSubmit = (data: FieldValues) => {
    const toastId = toast.loading("Please wait...");
    try {
      const formData = new FormData();
      formData.append("image", data.productImage[0]);
      fetch(imagebbApi, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then(async (profileResponse) => {
          if (profileResponse.success) {
            const productImageURL = profileResponse.data.display_url;
            const productPriceConvert = Number(data.productPrice);
            const productQuantityConvert = Number(data.productQuantity);

            const {
              productName,
              frameMaterial,
              frameShape,
              lensType,
              brand,
              gender,
              color,
            } = data;

            const glassData = {
              productName,
              productPrice: productPriceConvert,
              productQuantity: productQuantityConvert,
              productImage: productImageURL,
              frameMaterial,
              frameShape,
              lensType,
              brand,
              gender,
              color,
              userEmail: user?.email,
            };
            await addGlass(glassData);
            toast.success("Product added successfully!", {
              id: toastId,
              duration: 2000,
            });
            reset();
          }
        });
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="container w-10/12 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className=" shadow-md lg:p-16 md:px-4 md:py-10 rounded-md">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-4">Add Glass</h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 my-5 ">
          <div>
            <Input
              {...register("productName")}
              type="text"
              crossOrigin={""}
              placeholder=""
              color="indigo"
              label="Product Name"
            />
          </div>
          <div>
            <Input
              {...register("productPrice")}
              type="number"
              crossOrigin={""}
              placeholder=""
              color="indigo"
              label="Product Price"
            />
          </div>
          <div>
            <Input
              {...register("productQuantity")}
              type="number"
              crossOrigin={""}
              placeholder=""
              color="indigo"
              label="Product Quantity"
            />
          </div>
          <div>
            <Input
              {...register("frameMaterial")}
              type="text"
              crossOrigin={""}
              placeholder=""
              color="indigo"
              label="Frame Material"
            />
          </div>
          <div>
            <Input
              {...register("frameShape")}
              type="text"
              crossOrigin={""}
              placeholder=""
              color="indigo"
              label="Frame Shape"
            />
          </div>
          <div>
            <Input
              {...register("lensType")}
              type="text"
              crossOrigin={""}
              placeholder=""
              color="indigo"
              label="Lens Type"
            />
          </div>
          <div>
            <Input
              {...register("brand")}
              type="text"
              crossOrigin={""}
              placeholder=""
              color="indigo"
              label="Brand"
            />
          </div>
          <div>
            <Input
              {...register("color")}
              type="text"
              crossOrigin={""}
              placeholder=""
              color="indigo"
              label="Color"
            />
          </div>
          <div>
            <select
              className="w-full py-2 rounded-lg border border-purple-50 text-sm text-gray-500"
              {...register("gender")}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <Input
              {...register("productImage")}
              type="file"
              crossOrigin={""}
              placeholder=""
              color="indigo"
              label="Product Image"
            />
          </div>
        </div>
        <div className="flex float-end ">
          <Button
            type="submit"
            variant="gradient"
            size="sm"
            color="green"
            placeholder={""}
          >
            Add Glass
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddGlass;