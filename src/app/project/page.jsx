"use client";
import Dashboard from "@/UI/Layout/Dashboard";
import Project from "@/UI/Overview/Project";
import { fetchData } from "@/lib/fetchProjectData";
import { HomeFilled } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Col, Flex, Row, Typography } from "antd";
import React from "react";
const { Title } = Typography;

const ProjectOverView = () => {
  const {
    data: projects,
    error,
    isLoading,
  } = useQuery({
    queryKey: "projectData",
    queryFn: fetchData,
  });
  return (
    <Dashboard>
      <Row className="p-10 gap-5">
        <Col span={24} className="gutter-row">
          <Flex align="center" gap={5}>
            <HomeFilled />
            <Title level={5} className="!mb-0">
              Project Overview
            </Title>
          </Flex>
        </Col>
        <Project />
      </Row>
    </Dashboard>
  );
};

export default ProjectOverView;
