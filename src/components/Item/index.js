import React, { Component } from "react";
import "./item.css";

class Item extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    // const { img } = this.props.itemDetail;
    console.log(this.props);
    const { new_price, price, img, item_name, quantity } = this.props.details;
    return (
      <div>
        <div style={{ float: "left" }}>
          <img className="small" src={img} alt="red chair" />
        </div>
        <div style={{ float: "right" }}>
          <div>{item_name}</div>
          <div>
            <span>${(new_price * this.props.discount).toFixed(2)}</span>
            <span>Qty: {quantity}</span>
          </div>
          <div>{price}</div>
        </div>
      </div>
    );
  }
}

export default Item;
