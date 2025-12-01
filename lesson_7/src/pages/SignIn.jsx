import React, { useEffect, useState } from "react";
import { Button, Form, message, Typography } from "antd";
import InputStyled from "../components/InputStyled";
import InputPasswordStyled from "../components/InputPasswordStyled";
import axios from "axios";

const SignIn = ({ isSignUp, setSignUp }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    setLoading(true)
    try {
      const response = await axios.get(`https://mindx-mockup-server.vercel.app/api/resources/accounts?apiKey=69206f04c549072033e5e004`)
      const users = response.data.data.data;
      const isLogin = users.find(user => user.email === values.username && user.password === values.password)
      if(isLogin){
        message.success("Login successfully!")
      }else {
         message.error("Login failed!")
      }
    } catch (error) {
      console.error(error.message);
    } finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    document.title = "Sign In - Lesson 7"
  }, [isSignUp])

  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center p-5">
      <Form
        form={form}
        name="login"
        layout="vertical"
        className="w-[380px]"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Typography.Title level={4} className="text-center mb-8">
          Welcome back!
        </Typography.Title>

        <Form.Item
          label="Email or phone number"
          name="username"
          rules={[
            {
              required: true,
              message: "Please enter your email or phone number",
            },
            {
              validator: (_, value) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const phoneRegex = /^(0|\+84)[3-9][0-9]{8}$/;

                if (
                  emailRegex.test(value) ||
                  phoneRegex.test(value.replace(/\s/g, ""))
                ) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Invalid email or phone number")
                );
              },
            },
          ]}
        >
          <InputStyled placeholder="youremail@gmail.com or 0901234567" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please enter your password" },
            { min: 6, message: "Password must be at least 6 characters" },
          ]}
        >
          <InputPasswordStyled placeholder="Enter your password" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="w-full !h-12 text-base font-medium"
          >
            Sign In
          </Button>
        </Form.Item>

        <div className="text-center text-sm text-gray-600">
          Not a user?{" "}
          <a
            onClick={() => setSignUp(true)}
            className="text-gray-600 font-medium hover:underline"
          >
            Sign Up
          </a>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;