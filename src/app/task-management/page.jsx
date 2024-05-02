"use client";
import Dashboard from "@/UI/Layout/Dashboard";
import Task from "@/UI/Overview/Tasks";
import Tasks from "@/UI/Overview/Tasks";
import { fetchTaskData } from "@/lib/fetchTaskData";
import { HomeFilled } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Col, Flex, Row, Typography } from "antd";
import React from "react";
const { Title } = Typography;

const ProjectOverView = () => {
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
        <Task />
      </Row>
    </Dashboard>
  );
};

export default ProjectOverView;
