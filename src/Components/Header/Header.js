import React, { Component } from 'react';
import './Header.css';
import Apple from '../../images/apple logo.svg';

class Header extends Component {
  render() {
    return (
      <header className='header'>      
          <nav class="header__nav navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="#" className='logo'><i>Filtr</i></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto align-items-center">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Explore Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Brands</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact us</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0 d-flex justify-content-center">
                <button class="btn btn-danger my-2 my-sm-0 mx-2" type="submit">Sign up/Login</button>
                <button class="btn btn-danger my-2 my-sm-0 mx-2" type="submit"><img src={Apple} alt="" /> Get the app</button>
              </form>
            </div>
          </nav>
          <h1 className='header__title text-light'>Power up with coffee</h1>
          <p className='header__info'>Start your exciting day with a cup of Brew Coffee</p>
          <button className='header__btn btn btn-success'>Explore Us</button>
      </header>
    )
  }
}

export default Header;