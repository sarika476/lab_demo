import React,{useState} from 'react'
import  Home from './Home';
//import { Button, Checkbox, Form, Input } from 'antd';
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

const goregister = () => {
    window.location.replace("register")
}

function Login()
{
    const gotohome = () => {
       window.location.replace("home")
    }

    return (
        <Layout style={{ minHeight: "100vh", backgroundImage:"url(./iiitb.png)",backgroundRepeat:'no-repeat'}}>
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
                  <Divider plain>Login form</Divider>
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
                      className="login-form-button" onClick={() => gotohome()}
                    >
                      Log in
                    </Button>
                  </Form.Item>
  
                  <Form.Item>
                    <Button className="login-form-button" onClick={goregister}>
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
export default Login