import { Button } from "antd";
import React, { Component } from "react";
import styles from"../styles/about.css";
import Nonveg from "../media/image-1.jpg";
import Veg from "../media/image-2.jpg";
import { ArrowRightOutlined } from '@ant-design/icons';

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="feedback">
                    <p className="qichen">ABOUT QICHEN</p>
                    <h1 className="taste">The Best Tasty & Yamee Food and Chief Based on Italiano</h1>
                    <p className="info">Sit amet consectetur adipiscing elitsue risus mauris quam neque adipiscing phasellus aenean ante orcirat scelerisque enim ut nulla vestibulum velvitae ut at elementum mauris, etiam ornare diame</p>
                    <Button className="learn">LEARN MORE <ArrowRightOutlined /></Button>
                </div>
                <div className="items">
                    <img src={Nonveg} alt="nonveg" />
                    <img src={Veg} alt="veg"/>
                </div>
            </div>
        )
    }
}

export default About;