"use client";
import Dashboard from "@/UI/Layout/Dashboard";
import { Flex, Typography } from "antd";
const { Title } = Typography;
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { HomeFilled } from "@ant-design/icons";
import Project from "@/UI/Overview/Project";

export default function Home() {
  const [greeting, setGreeting] = useState("");
  const currentDate = dayjs(); // Get the current date
  const formattedDate = currentDate.format("dddd, MMMM D");

  useEffect(() => {
    const determineGreeting = () => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setGreeting("Good morning");
      } else if (currentHour >= 12 && currentHour < 17) {
        setGreeting("Good afternoon");
      } else {
        setGreeting("Good evening");
      }
    };

    determineGreeting();
    const intervalId = setInterval(determineGreeting, 3600000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Dashboard>
      <Row className="p-10 gap-5">
        <Col span={24} className="gutter-row">
          <Flex align="center" gap={5}>
            <HomeFilled />
            <Title level={5} className="!mb-0">
              Home
            </Title>
          </Flex>

          <Flex justify="center" align="center" vertical>
            <p className="font-medium">{formattedDate}</p>
            <Title level={3}>{greeting}, Ashraful</Title>
          </Flex>
        </Col>
        <Project />
      </Row>
    </Dashboard>
  );
}
