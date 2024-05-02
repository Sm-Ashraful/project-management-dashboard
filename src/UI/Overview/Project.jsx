import { SettingFilled } from "@ant-design/icons";
import { Col, Flex, Typography } from "antd";
import React from "react";

const { Title } = Typography;

const Project = () => {
  return (
    <Col span={24} className="gutter-row ">
      <Flex align="center" gap={5}>
        <SettingFilled />
        <Title level={5} className="!mb-0">
          My Projects
        </Title>
      </Flex>
    </Col>
  );
};

export default Project;
