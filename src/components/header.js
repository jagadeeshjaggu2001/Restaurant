import { Component } from "react";
import logo from "../media/logo-white.png";
import "../styles/header.css";
import { DownOutlined, SmileOutlined,SearchOutlined,PhoneOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { Button } from 'antd';
const home = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        Home Restaurant
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Home Fastfood
                    </a>
                ),


            },
            {
                key: '3',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        Home Seafood
                    </a>
                ),

            },
        ]}
    />
);

const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        Menu Fastfood
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Menu Seafood
                    </a>
                ),


            },

        ]}
    />
);

const shop = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                       Our Products
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                       Product Details
                    </a>
                ),


            },

        ]}
    />
);

const blog = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                       Blog Standard
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                       Blog Details
                    </a>
                ),


            },

        ]}
    />
);

const pages = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                       Our Gallery
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                       Our Chefs
                    </a>
                ),


            },
            {
                key: '3',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                       Our History
                    </a>
                ),


            },
            {
                key: '4',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                       Reservations
                    </a>
                ),


            },
            {
                key: '5',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                       404
                    </a>
                ),
            },
            {
                key: '6',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                       Faq
                    </a>
                ),
            },
            {
                key: '7',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                       Contact
                    </a>
                ),


            },

        ]}
    />
);




class Header extends Component {
    render() {
        return (
            <div className="head">
                <img src={logo} alt="logo" className="logo"/>

                <ul type="none">
                    <li>
                        <Dropdown overlay={home}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Home
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </li>
                
                
                    <li>
                        <Dropdown overlay={menu}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Menu
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </li>

                    <li>
                        About
                    </li>

                    <li>
                        <Dropdown overlay={shop}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Shop
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </li>

                    <li>
                        <Dropdown overlay={blog}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Blog
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown overlay={pages}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Pages
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </li>
                    
                    <li>
                    <SearchOutlined />
                    </li>
                    <li>
                    <PhoneOutlined />
                    91+8520045182
                    </li>
                    <li>
                    <Button className="btn">BOOK A TABLE</Button>
                    </li>
                    </ul>


            </div>
        )
    }
}

export default Header;
