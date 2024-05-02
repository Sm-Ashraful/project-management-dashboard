"use client";
import Dashboard from "@/UI/Layout/Dashboard";
import { fetchData, fetchSingleData } from "@/lib/fetchProjectData";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  Descriptions,
  Row,
  Col,
  Button,
  Space,
  Flex,
  Avatar,
  message,
  Input,
} from "antd";
import { EditOutlined, PlusOutlined, SettingFilled } from "@ant-design/icons";
import ModalBox from "@/components/Modal";

const { Title, Paragraph, Text } = Typography;

const ProjectDetailsPage = ({ params }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectData, setProjectData] = useState(null);
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberRole, setNewMemberRole] = useState("");

  const queryClient = useQueryClient();

  const id = params.projectId;

  const {
    data: project,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projectData", id],
    queryFn: fetchSingleData,
    enabled: !!id, // Only fetch if we have an id
  });

  useEffect(() => {
    setProjectData(project);
  }, [project]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const newMember = {
      id: Math.floor(Math.random() * 10000),
      name: newMemberName,
      role: newMemberRole,
    };
    setProjectData({
      ...projectData,
      teamMembers: [...project.teamMembers, newMember],
    });

    setTimeout(() => {
      message.success("Member added (simulated API call)");
      queryClient.invalidateQueries(["projectData", id]); // Trigger Refetch
    }, 1000);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  if (!projectData) {
    return <div>Loading...</div>;
  }
  return (
    <Dashboard>
      <Row className="p-10 gap-5">
        <Col span={24} className="gutter-row">
          <Flex align="center" gap={5}>
            <SettingFilled />
            <Title level={5} className="!mb-0">
              Project Information Page
            </Title>
          </Flex>
        </Col>
        <Col span={24}>
          <Flex align="center" justify="space-between">
            <Flex align="center">
              <Title level={3} className="!mb-0">
                {project?.name}
              </Title>
              <Button type="text">
                <EditOutlined key="edit" />
              </Button>
            </Flex>
            <Flex justify="end" align="center" gap={3}>
              <p className="font-semibold">Team</p>
              {projectData?.teamMembers.map((person) => {
                return (
                  <Avatar key={person.id}>{person.name.slice(0, 3)}</Avatar>
                );
              })}
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                onClick={showModal}
              >
                <PlusOutlined />
              </Avatar>
            </Flex>
          </Flex>
          <ModalBox
            handleCancel={handleCancel}
            handleOk={handleOk}
            isModalOpen={isModalOpen}
          >
            <Input
              placeholder="Enter Name"
              value={newMemberName}
              onChange={(e) => setNewMemberName(e.target.value)}
            />
            <Input
              placeholder="Enter Role"
              value={newMemberRole}
              onChange={(e) => setNewMemberRole(e.target.value)}
            />
          </ModalBox>
        </Col>
      </Row>
      <Card title="Project Details" style={{ marginBottom: 20 }}>
        <Paragraph>{projectData.description}</Paragraph>

        <Descriptions bordered column={2} size="small">
          <Descriptions.Item label="Start Date">
            {projectData.startDate}
          </Descriptions.Item>
          <Descriptions.Item label="End Date">
            {projectData.dueDate}
          </Descriptions.Item>
          <Descriptions.Item label="Team Members">
            {projectData.teamMembers.map((member) => (
              <span key={member.id}>
                {member.name} ({member.role}){" "}
              </span>
            ))}
          </Descriptions.Item>
        </Descriptions>

        <Title level={4}>Tasks</Title>
        {/* Task list would go here, potentially with its own component */}

        <Space style={{ marginTop: 20 }}>
          <Button type="primary">Add New Task</Button>
        </Space>
      </Card>
    </Dashboard>
  );
};

export default ProjectDetailsPage;
