import { Avatar, Button, List, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ChatField } from '../ChatField/ChatField';
import styled from "styled-components";

const WrapperMessage = styled.div`
    flex: 1;
`;

export const MessageField = ({ messages }) => {
    useEffect(() => {
        const messageBody = document.querySelector('.message-wrapper .ant-spin-container');
        messageBody.scrollIntoView({ behavior: "smooth", block: "end" });
    }, [messages])

    return (
        <>
            <List
                className='message-wrapper'
                itemLayout="horizontal"
                dataSource={messages}
                renderItem={(item, index) => (
                    <List.Item
                        actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={`https://joesch.moe/api/v1/random?key=${index}`} />}
                            title={<a href="https://ant.design">{item.sender}</a>}
                            description={item.content}
                        />
                    </List.Item>
                )}
            />
            <ChatField />
        </>
    );
};