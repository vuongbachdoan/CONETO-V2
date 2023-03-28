import { Button, Form, Input, Space } from "antd";
import { Icons } from "../../../../Assets/icons/icons";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createMessage } from "../../../../graphql/mutations";
import { listMessages } from "../../../../graphql/queries";
import { useDispatch, useSelector } from "react-redux";
import { pushMessage, updateMessages } from "../../../../Redux/Features/User/userReducer";

const { TextArea } = Input;

export const ChatField = () => {
  const dispatch = useDispatch();

  const [focussing, setFocussing] = useState(false);
  const handleFocus = () => {
    setFocussing(!focussing);
  }
  const [message, setMessage] = useState("");
  const handleMessage = (e) => {
    setMessage(e.target.value);
  }
  const sendMessage = async (e) => {
    e.stopPropagation();

    const mes = await API.graphql(
      graphqlOperation(
        createMessage,
        {
          input: {
            content: message,
            sender: "vbachdoan",
            receiver: "dngthy",
          }
        }
      )
    )

    dispatch(pushMessage(mes.data.createMessage));
  }

  useEffect(() => {
    getMessage()
      .then((res) => dispatch(updateMessages(res.data.listMessages.items)))
  }, [])

  const getMessage = async () => {
    return await API.graphql(
      graphqlOperation(
        listMessages
      )
    )
  }

  return (
    <>
      <Form className='message-field' style={focussing ? { border: "1px solid #068558", boxShadow: "0px 0px 1px 3px #06855850" } : {}}>
        <Form.Item>
          <TextArea
            placeholder="Enter content..."
            autoSize={{ minRows: 1, maxRows: 10 }}
            onBlur={handleFocus}
            onFocus={handleFocus}
            onChange={handleMessage}
            value={message}
          />
        </Form.Item>
        <Form.Item className="m-0">
          <Space align='center' style={{ justifyContent: "space-between", width: "100%" }}>
            <Space align='center' style={{ justifyContent: "space-between", width: "100%" }}>
              {Icons.attach}
              {Icons.image}
              {Icons.audio}
            </Space>
            <Button type="primary" onClick={sendMessage}>Send</Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
}