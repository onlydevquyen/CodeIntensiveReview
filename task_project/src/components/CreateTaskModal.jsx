import React from "react";
import {
  Button,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  Modal,
  Row,
  Select,
} from "antd";
import FlagIcon from "../assets/icons/FlagIcon";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { users, taskStatus } from "../data/data";

const CreateTaskModal = ({ open, setOpen, setTasksData }) => {
  const [form] = useForm();

  const handleCreateTask = async () => {
    try {
      const values = await form.validateFields();
      setTasksData((prev) => [
        ...prev,
        { ...values, deadline: new Date(values.endDate) },
      ]);
      form.resetFields()
      setOpen(false)
    } catch (error) {
      console.log(error.message);
    } 
  };

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      title={
        <Flex>
          <FlagIcon />
        </Flex>
      }
      footer={
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <Button style={{ width: "100%" }}>Cancel</Button>
          </Col>
          <Col span={12} onClick={handleCreateTask}>
            <Button type="primary" style={{ width: "100%" }}>
              Save
            </Button>
          </Col>
        </Row>
      }
    >
      <h4>Save Task</h4>
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          assignedTo: 1,
          statusId: 1,
          flagId: 1,
        }}
      >
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
              <DatePicker />
            </Form.Item>
          </Col>

          <Col span={16}>
            <Form.Item label="Description" name="description">
              <TextArea placeholder="Type description" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Assign" name="assignedTo">
              <Select placeholder="Choose assign">
                {users.map((user) => {
                  return (
                    <Select.Option value={user.userId}>
                      {user.name}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>

          <Col span={16}>
            <Form.Item label="Status" name="statusId">
              <Select placeholder="Choose status">
                {taskStatus.map((status) => {
                  return (
                    <Select.Option value={status.statusId}>
                      {status.name}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>

          <Form.Item name="flagId"></Form.Item>
        </Row>
      </Form>
    </Modal>
  );
};

export default CreateTaskModal;
