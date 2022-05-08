import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    const {imgURL, title, info, price} = this.props;
    return (
      <div className='col-lg-3 col-md-6 col-sm-6 col-10'>
        <div className='card'>
          <div className='card-header'>
            <img className='card-image w-100' src={imgURL} alt="" />
          </div>
          <div className='card-body'>
            <h2 className='card-title'>{title}</h2>
            <p className='card-info'>
              {info}
            </p>
          </div>
          <div className='card-footer'>
            <span className='card-price'>${price}</span>
            <button className='card-btn btn btn-danger'>Order Now</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;