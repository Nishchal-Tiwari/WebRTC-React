import React from 'react'
import {Menu} from 'antd'
import { UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,} from '@ant-design/icons';

import {Link,useLocation } from 'react-router-dom'
export default function menu() {

  


  const link={
    home:'/',
    videocall:'/videocall',
    chat:'chat',
  share:'share',
    setting:'/setting',
    connection:'/connection'
  }
  return (
    <Menu
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <Link to={link.home}>Home</Link>,
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: <Link to={link.videocall}>Video Call</Link>,
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: <Link to={link.chat}>Chat</Link>,
            },
            {
              key: '4',
              icon: <UploadOutlined />,
              label: <Link to={link.share}>share</Link>,
            },
            {
              key: '5',
              icon: <UploadOutlined />,
              label: <Link to={link.connection}>Connection details</Link>,
            },
            {
              key: '6',
              icon: <UserOutlined />,
              children:[
                {
                  key: '4-1',
                  icon: <UserOutlined />,
                  label: 'nav 4-1',
                  children:[
                    {
                      key: '4-1-1',
                      icon: <UserOutlined />,
                      label: 'nav 4-1-1',
                    },
                    {
                      key: '4-1-2',
                      icon: <UserOutlined />,
                      label: 'nav 4-1-2',
                    }
                  ]
                  ,
                  type:'group'
                },
                {
                  key: '4-2',
                  icon: <UserOutlined />,
                  label: 'nav 4-2 non group',
                  children:[
                    {
                      key: '4-2-1',
                      icon: <UserOutlined />,
                      label: 'nav 4-2-1',

                    }
                    ,
                    {
                      key: '4-2-2',
                      icon: <UserOutlined />,
                      label: 'nav 4-2-2',
                    }
                  ]
                  ,
                  
                },{
                  key: '4-3',
                  icon: <UserOutlined />,
                  label: 'Log Out',
                }
              ],
              label: 'Settings',
              
            }
          ]}
        />
  )
}
