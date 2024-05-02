import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const items = [
  {
    key: "home",
    label: <a href={"/"}>Home</a>,
    icon: <HomeOutlined />,
  },
  {
    key: "project",
    label: <a href="/project">Project Overview</a>,
    icon: <SettingOutlined />,
  },
  {
    key: "task",
    label: <a href={"/task-management"}>Task Management</a>,
    icon: <AppstoreOutlined />,
  },

  {
    key: "loin",
    label: <a href={"/auth"}>User</a>,
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
