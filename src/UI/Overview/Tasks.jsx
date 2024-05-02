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
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Meta from "antd/es/card/Meta";
import TaskCard from "@/components/Task-card";
import { fetchTaskData } from "@/lib/fetchTaskData";

const { Title } = Typography;

const Task = () => {
  const {
    data: tasks,
    error,
    isLoading,
  } = useQuery({
    queryKey: "taskData",
    queryFn: fetchTaskData,
  });

  return (
    <Col span={24} className="gutter-row mt-8">
      <Flex align="center" gap={5}>
        <SettingFilled />
        <Title level={5} className="!mb-0">
          My Tasks
        </Title>
      </Flex>
      <div className="grid sm:grid-cols-2 gap-5 items-center ">
        {tasks?.map((task) => {
          return <TaskCard task={task} key={task.id} loading={isLoading} />;
        })}
      </div>
    </Col>
  );
};

export default Task;
