import React from "react";
import { Modal } from "antd";

const ModalBox = ({ children, isModalOpen, handleCancel, handleOk }) => {
  return (
    <>
      <Modal
        title="modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalBox;
