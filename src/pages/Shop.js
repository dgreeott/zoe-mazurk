import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../components/actions/cartActions";
import "../css/Shop.css";

class Shop extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
    console.log("clicked");
  };

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="card" key={item.id}>
          <img className="card-image-top" src={item.img} alt={item.title} />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <a
              href="more.php"
              class="btn btn-primary"
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              Go somewhere
            </a>
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
          <h1 className="text-center p-4">Our items</h1>
          <div className="box">{itemList}</div>
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
