import React, { Component } from "react";
import Item from "../Item";
import { connect } from "react-redux";

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fold: true
    };
  }
  handleToggle = () => {
    //console.log("this is happend in the Item component");
    this.setState({
      fold: !this.state.fold
    });
  };
  render() {
    return (
      <div>
        <div onClick={this.handleToggle}>
          {this.state.fold ? (
            <div>
              <span>See item details</span>
              <span>+</span>
            </div>
          ) : (
            <div>
              <span>Hide item details</span>
              <span>-</span>
              <div>
                <Item
                  details={this.props.itemDetails}
                  discount={this.props.discount}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemDetails: state.itemDetails,
    discount: state.discount
  };
};

export default connect(mapStateToProps)(ItemDetail);
