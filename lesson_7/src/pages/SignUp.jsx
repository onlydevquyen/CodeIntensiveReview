import React, { useEffect, useState } from "react";
import { Button, Flex, Form, message, Typography } from "antd";
import InputStyled from "../components/InputStyled";
import InputPasswordStyled from "../components/InputPasswordStyled";
import SelectStyled from "../components/SelectStyled";
import axios from "axios"
const SignUp = ({ isSignUp, setSignUp }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false)
  const onFinish = async (values) => {
    setLoading(true)
    try {
      const response = await axios.post(`https://mindx-mockup-server.vercel.app/api/resources/accounts?apiKey=69206f04c549072033e5e004`, values)
      message.success(response.data.message)
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
      document.title = "Sign Up - Lesson 7"
    }, [isSignUp])


  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center p-5">
      <Form
        form={form}
        name="signup"
        layout="vertical"
        className="w-[380px]"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Typography.Title level={4} className="text-center mb-8">
          Let's get you started
        </Typography.Title>

        {/* Full Name */}
        <Form.Item
          name="fullName"
          label="Full name"
          rules={[
            { required: true, message: "Please enter your full name" },
            { min: 2, message: "Name must be at least 2 characters" },
            { max: 50, message: "Name cannot exceed 50 characters" },
          ]}
        >
          <InputStyled placeholder="Ade Tiger" />
        </Form.Item>

        {/* Email */}
        <Form.Item
          name="email"
          label="Email address"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Invalid email address" },
          ]}
        >
          <InputStyled placeholder="youremail@gmail.com" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone number"
          rules={[
            { required: true, message: "Please enter your number" },
            {
              pattern: /^[3-9][0-9]{8}$/,
              message: "Invalid Vietnamese number",
            },
          ]}
        >
          <InputStyled placeholder="901234567" prefix="+84" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Create password"
          rules={[
            { required: true, message: "Please enter a password" },
            { min: 8, message: "Password must be at least 8 characters" },
            {
              pattern: /^(?=.*[A-Za-z])(?=.*[\d\W]).{8,}$/,
              message: "Password must contain at least 1 letter and 1 number or symbol",
            },
          ]}
          extra={
            <Flex vertical className="text-xs text-gray-500 mt-1">
              <span>• Minimum 8 characters</span>
              <span>• At least 1 letter and 1 number or special character (@, !, #, etc.)</span>
            </Flex>
          }
        >
          <InputPasswordStyled placeholder="Enter your password" />
        </Form.Item>

        {/* Location (Optional) */}
        <Form.Item
          name="location"
          label={
            <Flex align="center" gap={6}>
              <span>Location</span>
              <span className="font-light">(Optional)</span>
            </Flex>
          }
        >
          <SelectStyled
            placeholder="Select your city"
            allowClear
            options={[
              { value: "hanoi", label: "Hanoi" },
              { value: "hcm", label: "Ho Chi Minh City" },
              { value: "danang", label: "Da Nang" },
              { value: "haiphong", label: "Hai Phong" },
              { value: "cantho", label: "Can Tho" },
            ]}
          />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="w-full !h-12 text-base font-medium"
          >
            Sign Up
          </Button>
        </Form.Item>
 
        {/* Switch to Sign In */}
        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            onClick={() => setSignUp(false)}
            className="text-gray-600 font-medium hover:underline cursor-pointer"
          >
            Sign In
          </a>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;