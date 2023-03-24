import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import { Checkbox, Menu } from "antd";
import React from "react";
import { Icons } from "../../../../Assets/icons/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Chat channels', 'sub1', null, [
    getItem(
      <Checkbox>Messenger</Checkbox>,
      'messenger',
      null
    ),
    getItem(
      <Checkbox>Instagram</Checkbox>,
      'instagram',
      null
    ),
    getItem(
      <Checkbox>Whatsapp</Checkbox>,
      'whatsapp',
      null
    )
  ])
];

export const MenuCheckbox = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      mode="inline"
      items={items}
      className="checkbox-menu"
    />
  );
};