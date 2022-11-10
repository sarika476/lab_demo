import React from "react"
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
  const { Title } = Typography;
  const { Header, Content, Footer, Sider } = Layout;

function Home()
{
      return(
        <Layout style={{ minHeight: "100vh",display: 'flex',justifyContent: 'center',textAlign:'center',backgroundImage:"url(./iiitb.png)",backgroundRepeat:'no-repeat'}}>
          <Content>
            <div>
              <Row justify="center" align="bottom">
                  <Title className="center_title" level={3} style={{marginTop:'100px',fontSize:'50px'}}>
                       Welcome to ReactJS 
                  </Title>
              </Row>
            </div>
          </Content>
        </Layout>
    );
}
export default Home;
