import { Button, Dropdown, Space } from 'antd';
import './Filter.scss';
import React from 'react';
import { Icons } from '../../../../Assets/icons/icons';

const items = [
    {
        key: "1",
        label: <p>Unread</p>
    },
    {
        key: "2",
        label: <p>Read</p>
    }
]

export const Filter = () => {
    return (
        <Space direction="vertical" align='end' className='filter'>
            <Dropdown menu={{ items }}>
                <Space>
                    Status
                    {Icons.filter}
                </Space>
            </Dropdown>
        </Space>
    );
}