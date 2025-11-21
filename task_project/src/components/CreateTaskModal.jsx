import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  message,
  Modal,
  Row,
  Select,
} from "antd";
import FlagIcon from "../assets/icons/FlagIcon";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { users, taskStatus, flags } from "../data/data";
import dayjs from "dayjs";
import axios from "axios";
const CreateTaskModal = ({ open, setOpen, setTasksData, taskEdit }) => {
  const [form] = useForm();
  const [flagStatus, setFlagStatus] = useState(taskEdit?.flagId);
  // Đồng bộ form khi mở modal hoặc idEdit thay đổi
  useEffect(() => {
    if (open) {
      if (taskEdit) {
        form.setFieldsValue({
          title: taskEdit.title,
          description: taskEdit.description,
          endDate: taskEdit.deadline ? dayjs(taskEdit.deadline) : null,
          assignedTo: taskEdit.assignedTo,
          statusId: taskEdit.statusId,
          flagId: taskEdit.flagId,
        });
      } else {
        form.resetFields();
        form.setFieldsValue({
          assignedTo: 1,
          statusId: 1,
          flagId: 1,
        });
      }
    }
  }, [open, taskEdit, form]);

  // const handleCreateTask = async () => {
  //   try {
  //     const values = await form.validateFields();

  //     if (taskEdit) {
  //       // Cập nhật task
  //       setTasksData((prev) =>
  //         prev.map((item) =>
  //           item.taskId === taskEdit.taskId
  //             ? {
  //                 ...item,
  //                 ...values,
  //                 deadline: values.endDate ? values.endDate.toDate() : null,
  //               }
  //             : item
  //         )
  //       );
  //     } else {
  //       // Tạo task mới
  //     }

  //     form.resetFields();
  //     setOpen(false);
  //   } catch (error) {
  //     console.log("Validation failed:", error);
  //   }
  // };

  const handleCreateTask = async () => {
    try {
      const values = await form.validateFields();
      const newTask = {
        ...values,
        deadline: values.endDate ? dayjs(values.endDate).format("YYYY-MM-DD"): null,
      };
      setTasksData((prev) => [...prev, newTask]);
      const res = await axios.post("https://mindx-mockup-server.vercel.app/api/resources/tasks?apiKey=69206f04c549072033e5e004", newTask);      
      alert(res.data.message)
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleCancel = () => {
    setOpen(false);
    form.resetFields();
  };

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      title={
        <Flex align="center" gap={8}>
          <FlagIcon flagId={flagStatus || 1} />
          <span>{taskEdit ? "Edit Task" : "Create Task"}</span>
        </Flex>
      }
      footer={
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <Button style={{ width: "100%" }} onClick={handleCancel}>
              Cancel
            </Button>
          </Col>
          <Col span={12}>
            <Button
              type="primary"
              style={{ width: "100%" }}
              onClick={handleCreateTask}
            >
              {taskEdit ? "Update" : "Save"}
            </Button>
          </Col>
        </Row>
      }
    >
      <Form form={form} layout="vertical">
        <Row gutter={[12, 12]}>
          <Col span={16}>
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: "Title is required" }]}
            >
              <Input placeholder="Type title of task" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="End Date" name="endDate">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>

          <Col span={16}>
            <Form.Item label="Description" name="description">
              <TextArea placeholder="Type description" rows={3} />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Assign" name="assignedTo">
              <Select placeholder="Choose assign">
                {users.map((user) => (
                  <Select.Option key={user.userId} value={user.userId}>
                    {user.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={16}>
            <Form.Item label="Status" name="statusId">
              <Select placeholder="Choose status">
                {taskStatus.map((status) => (
                  <Select.Option key={status.statusId} value={status.statusId}>
                    {status.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Flag" name="flagId">
              <Select
                placeholder="Choose flag"
                onChange={(value) => setFlagStatus(value)}
              >
                {flags.map((flag) => (
                  <Select.Option key={flag.flagId} value={flag.flagId}>
                    <FlagIcon flagId={flag.flagId || 1} />
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default CreateTaskModal;
