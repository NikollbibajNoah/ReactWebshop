import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {config} from '../WebConfig';
import { Route, Routes, useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
let currentKey = 0;

function MainLayout() {
  const navigate = useNavigate();

  //Navigates to the nav link item
  function handleNavMenuClick(e) {
    currentKey = e.key;

    navigate(config[currentKey].path);
  }
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo title">
            WebShop
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{
            flex: 1,
            minWidth: 0,
          }}

          onClick={handleNavMenuClick}
        >
          {config.map((c, i) => (
            <Menu.Item key={i}>{c.title}</Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <h1>{config[currentKey].title}</h1>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            {config.map((route) => (
              <Route path={route.path} element={route.element}  />
            ))}
          </Routes>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MainLayout;