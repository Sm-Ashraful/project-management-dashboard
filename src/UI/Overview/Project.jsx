"use client";
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  EyeOutlined,
  SettingFilled,
  SettingOutlined,
} from "@ant-design/icons";
import { Col, Flex, Row, Typography, Card, Avatar, Skeleton } from "antd";
import React, { useEffect } from "react";
import { fetchData } from "@/lib/fetchProjectData";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Meta from "antd/es/card/Meta";
import ProductCard from "@/components/product-card";

const { Title } = Typography;

const Project = () => {
  const {
    data: projects,
    error,
    isLoading,
  } = useQuery({
    queryKey: "projectData",
    queryFn: fetchData,
  });

  console.log("Data: ", projects);

  return (
    <Col span={24} className="gutter-row ">
      <Flex align="center" gap={5}>
        <SettingFilled />
        <Title level={5} className="!mb-0">
          My Projects
        </Title>
      </Flex>
      <div className="flex gap-5 items-center ">
        {projects?.map((project) => {
          return (
            <ProductCard
              project={project}
              key={project.id}
              loading={isLoading}
            />
          );
        })}
      </div>
    </Col>
  );
};

export default Project;
