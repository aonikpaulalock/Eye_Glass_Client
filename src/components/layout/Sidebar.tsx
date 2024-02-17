import { NavLink } from "react-router-dom";
import { toast } from "sonner";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { PowerIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    const toastId = toast.loading("loading...");
    dispatch(logout());
    toast.success("Logged out", { id: toastId, duration: 2000 });
  };
  return (
    <div  style={{ flex: '0 0 auto', position: 'fixed', height: '100%', overflowY: 'auto' }}>
      <Card
        placeholder={""}
        className="bg-blue-gray-900 h-screen w-6/12 max-w-[20rem] p-4 rounded-none"
      >
        <div className="mb-2 p-4">
          <Typography placeholder={""} variant="h5" color="white">
            Eye Glass Management
          </Typography>
        </div>
        <List placeholder={""}>
          <ListItem placeholder={""} className="text-white">
            <NavLink
              to="/add-product"
            >
              Add Glass
            </NavLink>
          </ListItem>
          <ListItem placeholder={""} className="text-white">
            {" "}
            <NavLink
              to="/all-products"
            >
              All Glasses
            </NavLink>
          </ListItem>
          <ListItem placeholder={""} className="text-white">
            {" "}
            <NavLink
              to="/sales-history"
            >
              Sales History
            </NavLink>
          </ListItem>
          <ListItem onClick={handleLogout} className="text-red-600 mt-10" placeholder={""}>
            <ListItemPrefix placeholder={""} >
              <PowerIcon className="h-5 w-5 text-red-600" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </div>
  );
};

export default Sidebar;
