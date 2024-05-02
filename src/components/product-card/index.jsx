import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Card, Skeleton } from "antd";
import Meta from "antd/es/card/Meta";
import Link from "next/link";
import React from "react";

const ProductCard = ({ project, loading }) => {
  return (
    <Link href={`/project/${project.id}`}>
      <Card
        style={{ width: 350, marginTop: 16 }}
        actions={[
          <EyeOutlined key="view" />,
          <EditOutlined key="edit" />,
          <DeleteOutlined key="delete" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            title={project.name}
            description={`${project.description.slice(0, 80)}...`}
          />
        </Skeleton>
      </Card>
    </Link>
  );
};

export default ProductCard;
