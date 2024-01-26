import { Layout, Menu } from "antd";
import { userPath } from "../../routes/user.routes";
import { sidebarGenerators } from "../../utils/sidebarGenerators";
const { Sider } = Layout;
const Sidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div style={{
        color: "white",
        height: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <h1>PH_Univercity</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={sidebarGenerators(userPath)}
      />
    </Sider>
  )
};

export default Sidebar;