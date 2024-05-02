"use client";
import React, { useState } from "react";
import { Flex, Typography, Avatar, Dropdown } from "antd";
const { Title } = Typography;
import { Input, Space } from "antd";
import { SmileOutlined, UserOutlined } from "@ant-design/icons";

const Header = ({ toggleSidebar }) => {
  const [searchText, setSearchText] = useState("");
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];
  return (
    <section>
      <Flex
        justify="space-between"
        className="w-full px-5 bg-[#001529] text-white py-3 fixed top-0 left-0"
      >
        <Flex align="center">
          <button onClick={toggleSidebar} className="text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M16.4 9H3.6c-.552 0-.6.447-.6 1c0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1c0-.553-.048-1-.6-1m0 4H3.6c-.552 0-.6.447-.6 1c0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1c0-.553-.048-1-.6-1M3.6 7h12.8c.552 0 .6-.447.6-1c0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1c0 .553.048 1 .6 1"
              />
            </svg>
          </button>
          <Title className="!text-white !mb-0" level={4}>
            Dashboard
          </Title>
        </Flex>

        <form class="max-w-md mx-auto bg-white rounded-full overflow-hidden">
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="default-search"
              placeholder="Search Project, Task"
              required
              className="py-2    px-10 text-black focus:outline-none"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit" className=" bg-blue-500 py-2 w-24 text-white">
              Search
            </button>
          </div>
        </form>
        <Dropdown
          menu={{
            items,
          }}
        >
          <Avatar icon={<UserOutlined />} className="!bg-white !text-black" />
        </Dropdown>
      </Flex>
    </section>
  );
};

export default Header;
