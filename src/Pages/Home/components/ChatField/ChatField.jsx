import { Button, Form, Input, Space } from "antd";
import { Icons } from "../../../../Assets/icons/icons";
import { useState } from "react";

const { TextArea } = Input;

export const ChatField = () => {

  const [focussing, setFocussing] = useState(false);
  const handleFocus = () => {
    setFocussing(!focussing);
  }
    return (
      <Form className='message-field' style={focussing ? { border: "1px solid #068558", boxShadow: "0px 0px 1px 3px #06855850" } : {}}>
        <Form.Item>
          <TextArea
            placeholder="Enter content..."
            autoSize={{ minRows: 1, maxRows: 10 }}
            onBlur={handleFocus}
            onFocus={handleFocus}
          />
        </Form.Item>
        <Form.Item className="m-0">
          <Space align='center' style={{ justifyContent: "space-between", width: "100%" }}>
            <Space align='center' style={{ justifyContent: "space-between", width: "100%" }}>
              {Icons.attach}
              {Icons.image}
              {Icons.audio}
            </Space>
            <Button type="primary">Send</Button>
          </Space>
        </Form.Item>
      </Form>
    );
  }