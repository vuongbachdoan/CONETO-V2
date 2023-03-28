import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Button, Divider, Form, Input, Layout, Menu, Space, Typography, theme } from 'antd';
import React, { useEffect, useState } from 'react';
import "./Home.scss";
import { Icons } from '../../Assets/icons/icons';
import { Filter } from './components/Filter/Filter';
import { MenuCheckbox } from './components/MenuCheckbox/MenuCheckbox';
import { ChatSummary } from './components/ChatSummary/ChatSummary';
import { ChatField } from './components/ChatField/ChatField';
import { useSelector } from 'react-redux';
import { Auth } from 'aws-amplify';
import { MessageField } from './components/MessageField/MessageField';
import styled from "styled-components";

const { Header, Sider, Content } = Layout;
const { TextArea } = Input;
const WrapperMessage = styled.div`
  background: red;
`;

export const Home = () => {
  const logoutFunc = useSelector((state) => state.USER.logOut)
  const { token: { colorBgContainer } } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    {
      key: '1',
      icon: <span className='anticon anticon-upload ant-menu-item-icon'>{Icons.message}</span>,
      label: 'Inbox'
    },
    {
      key: '2',
      icon: <span className='anticon anticon-upload ant-menu-item-icon'>{Icons.notification}</span>,
      label: 'Reminder'
    },
    {
      key: '3',
      icon: <span className='anticon anticon-upload ant-menu-item-icon'>{Icons.clock}</span>,
      label: 'Scheduler'
    }
  ]

  const profileItems = [
    {
      key: '1',
      icon: <span className='anticon anticon-upload ant-menu-item-icon'>{Icons.search}</span>,
      label: 'Search in conversation'
    },
    {
      key: '2',
      icon: <span className='anticon anticon-upload ant-menu-item-icon'>{Icons.attach}</span>,
      label: 'Links'
    },
    {
      key: '3',
      icon: <span className='anticon anticon-upload ant-menu-item-icon'>{Icons.image}</span>,
      label: 'Shared images'
    }
  ];

  const handleLogOut = () => {
    Auth.signOut()
  }

  const messages = useSelector((state) => state.USER.messages)

  return (

    <Layout className="app-layout">
      <Sider className='app-sidebar' trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          {
            !collapsed ? Icons.logo : Icons.logoCollapse
          }
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
      {
        !collapsed &&
        <Sider className='app-sidebar sub-sidebar'>
          <Space.Compact direction='vertical' block={true} align={'center'}>
            <Typography.Title level={5} ellipsis>Conversations</Typography.Title>
            <Filter />
            <MenuCheckbox />
            <div className="wrap-chat_summary">
              <ChatSummary />
              <ChatSummary />
              <ChatSummary />
            </div>
          </Space.Compact>
        </Sider>
      }
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Space style={{ justifyContent: "space-between", width: "100%" }}>
            {
              React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: 'trigger',
                  onClick: () => setCollapsed(!collapsed),
                })
            }
            <Space className="message-actions">
              {
                Icons.call
              }
              {
                Icons.video
              }
            </Space>
          </Space>
        </Header>
        <Content
          style={{
            margin: '12px 12px 0px 12px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            overflowY: "hidden"
          }}
          className='app-content'
        >
          <MessageField messages={messages} />
        </Content>
      </Layout>
      {
        !collapsed &&
        <Sider className='app-sidebar sub-sidebar profile-sidebar'>
          <Space.Compact direction='vertical' block={true} align={'center'}>
            <Typography.Title level={5} ellipsis>Profile</Typography.Title>
            <Space align='center' direction='vertical'>
              <img className="profile-avatar" src="https://d2uhloicyvrx5p.cloudfront.net/sample/contact-4.png" alt="avatar" />
            </Space>
            <Typography.Title level={5} ellipsis>Alex John</Typography.Title>
            <Menu
              theme="light"
              mode="inline"
              items={profileItems}
            />
          </Space.Compact>
        </Sider>
      }
    </Layout>
  );
};