import React, { Component } from "react";
import { fetchData } from "../../actions";
import { connect } from "react-redux";
import ItemDetail from "../ItemDetail";
import ApplyPromo from "../ApplyPromo";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.getPrice();
  }
  render() {
    const { subtotal, savings, tax, zip } = this.props.pricing;
    let currSubtotal = (subtotal * this.props.discount).toFixed(2);
    let currTax = (currSubtotal * (tax / subtotal)).toFixed(2);
    let currTotal = Number(currSubtotal) + Number(currTax) - savings;
    return this.props.loading ? (
      <p className="Loading">Loading...</p>
    ) : (
      <div className="App">
        <div className="prices">
          <span>Subtotal</span> <span className="dollors">${currSubtotal}</span>
        </div>
        <p className="discount">
          {this.props.discount === 1 ? "" : "10% Discount Applied"}
        </p>

        <div className="prices">
          <div className="Tooltip">
            Pickup savings
            <span className="Tooltip-text">
              Picking up your order in the store helps cut costs, and we pass
              the savings on to you
            </span>
          </div>
          <span className="dollors" style={{ color: "red" }}>
            -${savings}
          </span>
        </div>

        <div className="prices">
          <span>Est. taxes & fees</span>{" "}
          <span className="dollors">${currTax}</span>
          <div className="tax">(Based on {zip})</div>
        </div>
        <hr color="#ddd" />

        <div className="total">
          Est. total <span className="dollors">${currTotal}</span>
        </div>
        <ItemDetail />

        <ApplyPromo />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pricing: state.pricing,
    discount: state.discount,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPrice: () => dispatch(fetchData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
