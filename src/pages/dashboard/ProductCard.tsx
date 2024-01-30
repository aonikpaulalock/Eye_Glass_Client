import {
  Button,
  Checkbox,
  Typography,
} from "@material-tailwind/react";
import fallbackImage from "../../assets/images/no-image.png";
import { useDeleteEyeGlassMutation } from "../../redux/features/product/eyeGlassApi";
import EditModal from "./EditModal";
import UpdateModal from "./UpdateModal";
import SalesModal from "./SalesModal";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

type TEyeGlass = {
  _id: string;
  productName: string;
  productPrice: number;
  productQuantity: number;
  productImage: string;
  lensType: string;
  gender: string;
  frameShape: string;
  frameMaterial: string;
  color: string;
  brand: string;
};

type Tprops = {
  eyeGlasses: {
    data: TEyeGlass[];
  };
};

const ProductCard: React.FC<
  Tprops & { handleCheckboxClick: (id: string) => void }
> = ({ eyeGlasses, handleCheckboxClick }) => {
  const [deleteGlass] = useDeleteEyeGlassMutation();
  const handleDelete = async(id: string) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async(result) => {
      if (result.isConfirmed) {
        await deleteGlass(id);
        MySwal.fire({
          title: "Deleted!",
          text: "Glass has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <tbody className="">
      {eyeGlasses?.data?.map(
        (
          {
            _id,
            productName,
            productPrice,
            productQuantity,
            productImage,
            lensType,
            frameMaterial,
            brand,
          }: TEyeGlass,
          index: number
        ) => {
          const isLast = index === eyeGlasses?.data?.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

          return (
            <tr key={_id}>
              <td className={classes}>
                <Checkbox
                  onClick={() => handleCheckboxClick(_id)}
                  className="py-2"
                  crossOrigin={""}
                  label=""
                />
              </td>
              <td className={classes}>
                <div className="flex items-center gap-2">
                  <img
                    className="h-10 w-10 rounded-lg object-cover object-center"
                    src={productImage ? productImage : fallbackImage}
                    alt={productImage}
                  />
                  <div className="flex flex-col mr-2">
                    <Typography
                      placeholder={""}
                      color="blue-gray"
                      className="font-normal text-[12px]"
                    >
                      {productName}
                    </Typography>
                  </div>
                </div>
              </td>
              <td className={classes}>
                <div className="flex flex-col">
                  <Typography
                    placeholder={""}
                    variant="small"
                    color="blue-gray"
                    className="font-normal mr-2"
                  >
                    ${productPrice}
                  </Typography>
                </div>
              </td>
              <td className={classes}>
                <Typography
                  placeholder={""}
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {productQuantity}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  placeholder={""}
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {brand}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  placeholder={""}
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {lensType}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  placeholder={""}
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {frameMaterial}
                </Typography>
              </td>
              <td className={classes}>
                <EditModal id={_id} />
              </td>
              <td className={classes}>
                <UpdateModal id={_id} />
              </td>
              <td className={classes}>
                  <Button
                    placeholder={""}
                    variant="gradient"
                    color="red"
                    className="py-2 px-3"
                    onClick={() => handleDelete(_id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>

                  </Button>
              </td>
              <td className={classes}>
                <SalesModal id={_id} />
              </td>
            </tr>
          );
        }
      )}
    </tbody>
  );
};

export default ProductCard;