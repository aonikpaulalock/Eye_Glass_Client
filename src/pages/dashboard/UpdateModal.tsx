import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import {
  useGetEyeGlassQuery,
  useUpdateEyeGlassMutation,
} from "../../redux/features/product/eyeGlassApi";
import { toast } from "sonner";
const image_upload_token = "ab44083a680f1ff8d7a143435888c291";

const UpdateModal = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const { data: glassData } = useGetEyeGlassQuery(id);
  const image_upload_url = `https://api.imgbb.com/1/upload?key=${image_upload_token}`;
  const [updateGlass] = useUpdateEyeGlassMutation();
  const handleOpen = () => setOpen(!open);

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Please wait...");
    try {
      if (data.productImage[0]) {
        const formData = new FormData();
        formData.append("image", data.productImage[0]);
        fetch(image_upload_url, {
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

              const productData = {
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
              };
              await updateGlass({ productData, id });
              toast.success("Product update successfully!", {
                id: toastId,
                duration: 2000,
              });
              handleOpen();
            }
          });
      } else {
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

        const productData = {
          productName,
          productPrice: productPriceConvert,
          productQuantity: productQuantityConvert,
          frameMaterial,
          frameShape,
          lensType,
          brand,
          gender,
          color,
        };
        await updateGlass({ productData, id });
        toast.success("Product update successfully!", {
          id: toastId,
          duration: 2000,
        });
        handleOpen();
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
  };

  return (
    <>
      <Button
        placeholder={""}
        variant="outlined"
        color="purple"
        className="py-2 px-3"
        onClick={handleOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>

      </Button>
      <Dialog placeholder={""} open={open} handler={handleOpen}>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between items-center">
              <DialogHeader placeholder={""}>Update Glass</DialogHeader>
              <div
                onClick={handleOpen}
                className="me-4 cursor-pointer border-2 border-red-400 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            <DialogBody placeholder={""}>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 my-5">
                <div>
                  <Input
                    {...register("productName")}
                    defaultValue={glassData?.data?.productName}
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
                    defaultValue={glassData?.data?.productPrice}
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
                    defaultValue={glassData?.data?.productQuantity}
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
                    defaultValue={glassData?.data?.frameMaterial}
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
                    defaultValue={glassData?.data?.frameShape}
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
                    defaultValue={glassData?.data?.lensType}
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
                    defaultValue={glassData?.data?.brand}
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
                    defaultValue={glassData?.data?.color}
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
                    defaultValue={glassData?.data?.gender}
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
            </DialogBody>
            <DialogFooter placeholder={""}>
              <Button
                type="submit"
                placeholder={""}
                variant="gradient"
                color="green"
              >
                <span>Update</span>
              </Button>
            </DialogFooter>
          </form>
        </div>
      </Dialog>
    </>
  );
};

export default UpdateModal;