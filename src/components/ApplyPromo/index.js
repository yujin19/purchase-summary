import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class ApplyPromo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fold: true,
      input: "",
      error: false
    };
  }
  handleClick = () => {
    this.setState({
      fold: !this.state.fold
    });
  };
  handleInput = e => {
    this.setState({ input: e.target.value });
  };
  handleApply = () => {
    if (this.state.input === "DISCOUNT") {
      this.props.applyPromoCode(0.9);
    } else {
      this.props.applyPromoCode(1);
      this.setState({
        error: true
      });
    }
  };
  render() {
    return (
      <div>
        <div onClick={this.handleClick}>
          {this.state.fold ? (
            <div>
              <span>Apply promo code </span>
              <span>+</span>
            </div>
          ) : (
            <div>
              <span>Hide promo code </span>
              <span>-</span>
            </div>
          )}
        </div>
        <div>
          {this.state.fold ? (
            ""
          ) : (
            <div>
              <div>Promo Code</div>
              <input
                type="text"
                value={this.state.input}
                onChange={this.handleInput}
              />
              <button type="button" onClick={this.handleApply}>
                Apply
              </button>
              <p>{this.state.error ? "!Invalid Code" : ""}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    applyPromoCode: num => dispatch(actions.applyPromoCode(num))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(ApplyPromo);
