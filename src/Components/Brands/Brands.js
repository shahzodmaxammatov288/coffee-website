import React, { Component } from "react";
import "./Brands.css";

class Brands extends Component {
  render() {
    const { imgURL } = this.props;
    return (
      <div className="col-lg-2 col-md-3 col-sm-3 col-5 d-flex justify-content-center align-items-center">
        <img src={imgURL} alt="" className="w-100" />
      </div>
    );
  }
}

export default Brands;
