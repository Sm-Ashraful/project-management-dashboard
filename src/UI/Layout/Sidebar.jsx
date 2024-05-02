import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const items = [
  {
    key: "home",
    label: "Home",
    icon: <HomeOutlined />,
  },
  {
    key: "project",
    label: "Project Overview",
    icon: <SettingOutlined />,
  },
  {
    key: "task",
    label: "Task Management",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "todo",
        label: "To Do",
      },
      {
        key: "process",
        label: "In Process",
      },
      {
        key: "done",
        label: "Complete",
      },
    ],
  },

  {
    key: "loin",
    label: "User",
    icon: <SettingOutlined />,
  },
];

const Sidebar = ({ isSidebarOpen }) => {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <section className="transition duration-300 fixed left-0 top-16 h-screen overflow-hidden">
      <Menu
        className="transition-width duration-300"
        onClick={onClick}
        style={{
          width: isSidebarOpen ? 256 : 0,
          color: "white",
          height: "100%",
          overflowX: "scroll",
        }}
        theme="dark"
        defaultOpenKeys={["home"]}
        defaultSelectedKeys={["home"]}
        mode="inline"
        items={items}
      />
    </section>
  );
};

export default Sidebar;
