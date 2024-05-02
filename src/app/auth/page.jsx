"use client";
import React, { useState } from "react";
import { Form, Input, Button, message, Typography, Flex, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { login } from "../../config/mockResponses";

const { Title } = Typography;

const AuthenticationPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    setIsLoading(true);

    try {
      const response = await login(values.username, values.password);

      if (response.success) {
        message.success("Login Successful!");
        // Handle successful login (e.g., redirect to dashboard)
      } else {
        message.error("Login Failed: " + response.message);
      }
    } catch (error) {
      message.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Flex
        vertical
        justify="center"
        align="center"
        className="w-2/4 p-10 bg-[#edeae9] border rounded-md"
      >
        <Flex vertical justify="center" align="center" className="mb-4">
          <Title level={5} className="!mb-0">
            Login
          </Title>
          <p className="text-[.75rem]">(username: ashraful, password: demo) </p>
        </Flex>
        <Form name="login_form" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </div>
  );
};

export default AuthenticationPage;
