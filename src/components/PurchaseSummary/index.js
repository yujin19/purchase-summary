import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import ItemDetail from "../ItemDetail";
import ApplyPromo from "../ApplyPromo";
import "./purchase.css";

class PurchaseSummary extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getPrice();
  }
  render() {
    const { pricing, discount } = this.props;
    return (
      <div className="main">
        <div>
          <span className="subtotal">Subtotal</span>
          <span className="subtotalprice">
            ${(pricing.subtotal * discount).toFixed(2)}
          </span>
        </div>
        <p>{discount === 1 ? "" : "10% Discount Applied"}</p>
        <div>
          <span>
            Pickup savings
            <span>
              Picking up your order in the store helps cut costs, and we pass
              the savings on to you
            </span>
          </span>
          <span>${pricing.savings}</span>
        </div>
        <div>
          <span>Est.taxes&fees</span>
          <span>${pricing.tax}</span>
        </div>
        <div>
          <span>(Based on {pricing.zip})</span>
        </div>
        <div>-----------------</div>
        <div>
          <span>Est.total</span>
          <span>${pricing.total}</span>
        </div>

        <div>
          <ItemDetail />
        </div>
        <div>-----------------</div>
        <div>
          <ApplyPromo />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pricing: state.pricing,
    discount: state.discount,
    loading: state.loading,
    promo: state.promo,
    itemDetails: state.itemDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPrice: () => {
      dispatch(actions.fetchData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseSummary);
