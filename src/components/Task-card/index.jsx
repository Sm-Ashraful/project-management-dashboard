import { Card, Typography, Button, Badge, Space, Modal } from "antd";
import { EditOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import { useState } from "react";
// ... other imports

const TaskCard = ({ task }) => {
  // State for modal visibility
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Handlers (assuming simplified state management for illustration)
  const handleMarkComplete = () => {
    // ... update task status (in mock data or API call)
  };

  const handleEdit = () => {
    // ... open task editing modal
  };

  const handleDeleteConfirm = () => {
    // ... delete task (in mock data or API call)
  };

  return (
    <Card style={{ marginBottom: 20 }}>
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <Typography.Title level={4}>
          {task.title}
          <Badge
            count={task.status}
            style={{
              backgroundColor:
                task.status === "completed" ? "#52c41a" : "#f5222d",
              marginLeft: 10,
            }}
          />
        </Typography.Title>

        <Typography.Paragraph>{task.description}</Typography.Paragraph>

        <Space>
          <Typography.Text type="secondary">
            Due Date: {task.dueDate}
          </Typography.Text>
        </Space>

        <Space>
          {task.status !== "Completed" && (
            <Button
              type="primary"
              icon={<CheckOutlined />}
              onClick={handleMarkComplete}
            >
              Mark as Complete
            </Button>
          )}
          <Button icon={<EditOutlined />} onClick={handleEdit}>
            Edit
          </Button>
          <Button
            type="danger"
            icon={<DeleteOutlined />}
            onClick={() => setIsDeleteModalOpen(true)}
          >
            Delete
          </Button>
        </Space>
      </Space>

      <Modal
        title="Confirm Deletion"
        visible={isDeleteModalOpen}
        onOk={handleDeleteConfirm}
        onCancel={() => setIsDeleteModalOpen(false)}
      >
        <p>Are you sure you want to delete this task?</p>
      </Modal>
    </Card>
  );
};

export default TaskCard;
