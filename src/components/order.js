import { Button } from "antd";
import React, { Component } from "react";
import hero from "../media/hero-1.jpg";
import "../styles/order.css";
class Order extends Component{
    render(){
        return(
            <div className="main">
            <div className="content">
                <h1>Crispy Chicken Burgers</h1>
                <p>Sit amet consectetur adipiscing Malesuada morbigrave ullamore alesuada nec pulvinar nisle</p>
                <Button>ORDER NOW</Button>
            </div>
            <div className="burger">
                <img src={hero} alt="burgers" className="burg" />
            </div>
            </div>
        )
    }
}

export default Order;