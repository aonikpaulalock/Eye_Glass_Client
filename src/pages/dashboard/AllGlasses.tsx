import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
} from "@material-tailwind/react";
import { useDeleteManyEyeGlassMutation, useGetAllEyeGlassQuery } from "../../redux/features/product/eyeGlassApi";
import { useState } from "react";
import ProductCard from "./ProductCard";
import Loading from "../../utils/Loading";

const AllGlasses = () => {
  const [material, setMaterial] = useState("");
  const [shape, setShape] = useState("");
  const [lens, setLens] = useState("");
  const [brand, setBrand] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [productsId, setProductsId] = useState<string[]>([]);
  const [deletedAll] = useDeleteManyEyeGlassMutation();
  const query = {
    material,
    shape,
    lens,
    brand,
    gender,
    color,
    minPrice,
    maxPrice,
    searchTerm,
  };
  const { data: eyeGlasses, isLoading } = useGetAllEyeGlassQuery(query);

  if (isLoading) {
    return <Loading />
  }

  const handleCheckboxClick = (id: string) => {
    if (productsId) {
      const index = productsId.indexOf(id);

      if (index === -1) {
        setProductsId([...productsId, id]);
      } else {
        const newProductsId = [...productsId];
        newProductsId.splice(index, 1);
        setProductsId(newProductsId);
      }
    }
  };

  const handleDeleteMany = async () => {
    const res = await deletedAll(productsId);
    console.log(res);
  };

  const TABLE_HEAD = [
      <Button
        placeholder={""}
        variant="gradient"
        color="red"
        className="py-2 px-3"
        onClick={handleDeleteMany}
      >
        Delete All
      </Button>,
    "Product Name",
    "Price",
    "Quantity",
    "Brand",
    "Lens",
    "Material",
    "Edit & Duplicate",
    "Update",
    "Delete",
    "Sell",
  ];

  if (isLoading) {
    return <Loading />
  }

  return (
    <Card placeholder={""} className="rounded-none shadow-none py-6">
      <h1 className="text-center font-semibold text-2xl">All Eye Glass </h1>
      <CardHeader
        placeholder={""}
        floated={false}
        shadow={false}
        className="rounded-none"
      >
        <div className="flex justify-center items-center md:flex-row">
          <div className="w-full md:w-7/12 mb-4">
            <Input
              className="p-5"
              crossOrigin={""}
              onChange={(e) => setSearchTerm(e.target.value)}
              label="Search Glass"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
        <div className="mb-6 mt-4 flex items-center justify-between gap-4">
          <div>
            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="block appearance-none w-28 bg-white border border-gray-200 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-sm "
            >
              <option value="" disabled>
                Material
              </option>
              <option value="Metal">Metal</option>
              <option value="Plastic">Plastic</option>
              <option value="Acetate">Acetate</option>
            </select>
          </div>
          <div>
            <select
              value={shape}
              onChange={(e) => setShape(e.target.value)}
              className="block appearance-none w-28 bg-white border border-gray-200 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-sm "
            >
              <option value="" disabled>
                Shape
              </option>
              <option value="Rectangular">Rectangular</option>
              <option value="Round">Round</option>
              <option value="Cat-eye">Cat-eye</option>
            </select>
          </div>
          <div>
            <select
              value={lens}
              onChange={(e) => setLens(e.target.value)}
              className="block appearance-none w-28 bg-white border border-gray-200 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-sm "
            >
              <option value="" disabled>
                Lens
              </option>
              <option value="Single-vision">Single-vision</option>
              <option value="Bifocal">Bifocal</option>
              <option value="Progressive">Progressive</option>
            </select>
          </div>
          <div>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="block appearance-none w-28 bg-white border border-gray-200 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-sm "
            >
              <option value="" disabled>
                Brand
              </option>
              <option value="Lenskart">Lenskart</option>
              <option value="Prada">Prada</option>
              <option value="Gucci">Gucci</option>
            </select>
          </div>
          <div>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="block appearance-none w-28 bg-white border border-gray-200 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-sm "
            >
              <option value="" disabled>
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="block appearance-none w-28 bg-white border border-gray-200 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-sm "
            >
              <option value="" disabled>
                Color
              </option>
              <option value="Black">Black</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
            </select>
          </div>
          <div className="flex gap-2">
            <input
              onChange={(e) => setMinPrice(e.target.value)}
              type="number"
              className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded focus:outline-none focus:shadow-outline w-20 text-sm"
              placeholder="Min"
            />
            <input
              onChange={(e) => setMaxPrice(e.target.value)}
              type="number"
              className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded focus:outline-none focus:shadow-outline w-20 text-sm"
              placeholder="Max"
            />
          </div>
        </div>
      </CardHeader>
      <CardBody placeholder={""} className="overflow-x-auto">
        <table className="mt-4 w-full min-w-full text-center">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={index}
                  className="w-screen bg-blue-gray-50/50 p-3"
                >
                  <Typography
                    placeholder={""}
                    variant="small"
                    color="blue-gray"
                    className="font-semibold leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <ProductCard
            eyeGlasses={eyeGlasses}
            handleCheckboxClick={handleCheckboxClick}
          />
        </table>
      </CardBody>
    </Card>
  );
};

export default AllGlasses;