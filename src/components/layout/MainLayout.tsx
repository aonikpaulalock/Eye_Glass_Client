// import { Layout, Menu } from "antd";
// import Sider from "antd/es/layout/Sider";
// import ProductList from "../../pages/product/ProductList";
// import AddProduct from "../../pages/product/addProduct";
// import React from "react";
// import SalesForm from "../../pages/sales/SalesForm";
// import SalesHistory from "../../pages/sales/salesHistory";
// const { Content } = Layout;

// import { Layout, Menu } from "antd";

// const MainLayout = () => {
//   const [selectedSection, setSelectedSection] = React.useState('eyeglasses');

//   const renderSection = () => {
//     switch (selectedSection) {
//       case 'eyeglasses':
//         return <ProductList />;
//       case 'addEyeglass':
//         return <AddProduct />;
//       case 'sales':
//         return <SalesForm />;
//       case 'salesHistory':
//         return <SalesHistory />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <Sider width={200} theme="light">
//         <Menu
//           mode="inline"
//           defaultSelectedKeys={['eyeglasses']}
//           selectedKeys={[selectedSection]}
//           onSelect={(e) => setSelectedSection(e.key)}
//           style={{ height: '100%' }}
//         >
//           <Menu.Item key="eyeglasses">Eyeglasses</Menu.Item>
//           <Menu.Item key="addEyeglass">Add Eyeglass</Menu.Item>
//           <Menu.Item key="sales">Sales</Menu.Item>
//           <Menu.Item key="salesHistory">Sales History</Menu.Item>
//         </Menu>
//       </Sider>
//       <Layout>
//         <Content style={{ margin: '16px' }}>
//           {renderSection()}
//         </Content>
//       </Layout>
//     </Layout>
//   )
// };

// export default MainLayout;

import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const { Header, Content } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header>
          <Button>Logout</Button>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;



