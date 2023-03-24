import { Space, Typography } from "antd"
import './ChatSummary.scss';

export const ChatSummary = () => {
    return (
        <Space className="chat-summary" style={{justifyContent: "space-between"}} align="start">
            <Space className="infor" align="center">
                <img src="https://d2uhloicyvrx5p.cloudfront.net/sample/contact-4.png" alt="avatar" />
                <Space direction="vertical" align="start" style={{gap: 0}}>
                    <Typography.Title level={5}>Alex John</Typography.Title>
                    <Typography.Text ellipsis>This is some description</Typography.Text>
                </Space>
            </Space>
            <div className="time">2d</div>
        </Space>
    )
}