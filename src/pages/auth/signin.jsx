import React, { useContext } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
`;

const Signin = () => {
  const [form] = Form.useForm();
  const { regUsers, setInUser } = useContext(AuthContext);
  const nav = useNavigate();

  const toastSuccess = () => toast.success("Welcome!!!");
  const toastError = () => toast.error("User is not defined!!!");

  const reset = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    const findedUser = regUsers.filter(
      (u) => values.username == u.username && values.password == u.password
    );
    if (findedUser.length == 1) {
      toastSuccess();
      setInUser(findedUser[0]);
      setTimeout(() => {
        reset();
        nav(-1);
      }, 2200);
    } else {
      toastError();
    }
  };

  return (
    <Container>
      <Form
        layout="vertical"
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        form={form}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a
            style={{
              display: "inline-block",
              marginLeft: 20,
            }}
            className="login-form-forgot"
            href=""
          >
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{
              marginRight: 15,
            }}
          >
            Log in
          </Button>
          Or <Link to="/auth/signin">register now!</Link>
        </Form.Item>
      </Form>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default Signin;
