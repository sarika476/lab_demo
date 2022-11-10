import React from 'react'
import {
    Form,
    Input,
    Button,
    Cascader,
    Divider,
    Row,
    Typography,
    Layout,
    message,
    Modal,
  } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const register = () => {
    window.location.replace("login")
}
function Register()
{
    return (
        <Layout style={{ minHeight: "100vh",backgroundImage:"url(./iiitb.png)",backgroundRepeat:'no-repeat'}}>
          <Content>
            <div>
              <Row justify="center" align="bottom">
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{ remember: true }}
                >
                  <Title className="center_title" level={3}>
                    Lab 5 Frontend Demo
                  </Title>
                  <Divider plain>Registration form</Divider>
                  <Form.Item
                    name="name"
                    rules={[
                      { required: true, message: "Please input your Name!" },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Name"
                    />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Please input your Email!" },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Email"
                    />
                  </Form.Item>
                  <Form.Item
                    name="contactno"
                    rules={[
                      { required: true, message: "Please input your Contact No.!" },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Contactno"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      { required: true, message: "Please input your Password!" },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button" onClick={register}
                    >
                      Register
                    </Button>
                  </Form.Item>
                </Form>
              </Row>
            </div>
          </Content>
        </Layout>
      );
    
}
export default Register