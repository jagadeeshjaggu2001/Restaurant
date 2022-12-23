import React, { Component } from "react";
import "../styles/menu.css";
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

class Menu extends Component{
    render(){
        return(
            <div>
            <div className="foods">
                <p>OUR POPULAR FOOD</p>
                <h1 className="best">Best Category Foods Menu</h1>
                <div className="menu">
                <div className="item">
                    <img src="https://demo.webtend.net/html/qichen/assets/images/icon/icon-1.png"/>
                    <h1>Pizza</h1>
                    <Button className="btn1"><ArrowRightOutlined /></Button>

                </div>
                <div className="item">
                    <img src="https://demo.webtend.net/html/qichen/assets/images/icon/icon-2.png"/>
                    <h1>Burger</h1>
                    <Button className="btn1"><ArrowRightOutlined /></Button>

                </div>
                <div className="item">
                    <img src="https://demo.webtend.net/html/qichen/assets/images/icon/icon-3.png"/>
                    <h1>Bread</h1>
                    <Button className="btn1"><ArrowRightOutlined /></Button>

                </div>
                <div className="item">
                    <img src="https://demo.webtend.net/html/qichen/assets/images/icon/icon-4.png"/>
                    <h1>Seafoods</h1>
                    <Button className="btn1"><ArrowRightOutlined /></Button>

                </div>
                <div className="item">
                    <img src="https://demo.webtend.net/html/qichen/assets/images/icon/icon-5.png"/>
                    <h1>Coffee</h1>
                    <Button className="btn1"><ArrowRightOutlined /></Button>

                </div>
                <div className="item">
                    <img src="https://demo.webtend.net/html/qichen/assets/images/icon/icon-6.png"/>
                    <h1>Chicken</h1>
                    <Button className="btn1"><ArrowRightOutlined /></Button>

                </div>
            </div>

            <p className="special">Need any Special Food or Any Birthday Cakes? Order Now</p>
            </div>
           
            </div>
        )
    }
}

export default Menu;