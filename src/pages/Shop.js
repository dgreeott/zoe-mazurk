import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../components/actions/cartActions";
import "../css/Shop.css";



class Shop extends Component {

  handleClick = (id) => {
    this.props.addToCart(id);
    console.log('clicked');
  };

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="card m-3" key={item.id}>
          <div className="card-image m-2">
            <img src={item.img} alt={item.title} />
            <span className="card-title">{item.title}</span>
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              <i className="material-icons">+</i>
            </span>
          </div>

          <div className="card-content">
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
          </div>
        </div>
      );
    });
    return (
      <div className="section">
        <div className="container">
          <h3 className="font-weight-light text-center m-5">Our items</h3>
          <hr className="mt-2 mb-5"></hr>
          <div className="box text-center">{itemList}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
