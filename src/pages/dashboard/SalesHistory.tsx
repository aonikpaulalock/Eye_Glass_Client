import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import SalesCard from "./SalesCard";
import { useGetAllSalesQuery } from "../../redux/features/sales/salesApi";
import { useState } from "react";
import Loading from "../../utils/Loading";

const SalesHistory = () => {
  const [filter, setFilter] = useState("");
  const { data: sales, isLoading } = useGetAllSalesQuery(filter);
  const TABLE_HEAD = [
    "Product Name",
    "Buyer Name",
    "Price",
    "Brand",
    "Lens",
    "Color",
    "Sell Quantity",
  ];

  if (isLoading) {
    return <Loading />
  }

  return (
    <Card placeholder={""} className="h-full w-full container">
      <h1 className="text-center text-2xl font-semibold my-6">Sales History</h1>
      <CardHeader
        placeholder={""}
        floated={false}
        shadow={false}
        className="rounded-none "
      >
        <div className="flex justify-center items-center">
          <div className="w-4/12">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-200 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-sm "
            >
              <option value="" disabled>
                Show Data by Filter
              </option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>
      </CardHeader>
      <CardBody placeholder={""} className="overflow-x-auto container">
        <table className="mt-4 w-full min-w-full table-responsive  text-center">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={index}
                  className="bg-blue-gray-50/50 p-3"
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
          <SalesCard sales={sales} />
        </table>
      </CardBody>
    </Card>
  );
};

export default SalesHistory;