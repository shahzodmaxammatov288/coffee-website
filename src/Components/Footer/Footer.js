import React, { Component } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <SectionTitle sectionTitle="Get in Touch with Us" />
        <div className="container">
          <div className="row footer__row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 my-3">
              <h2 className="footer__list__title">Merchandise</h2>
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    T-shirts
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Caps
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Masks
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 my-3">
              <h2 className="footer__list__title">Franchise</h2>
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Coffee Outlet
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Coffee Vending Machine
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 my-3">
              <h2 className="footer__list__title">Franchise</h2>
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Promotions
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Customer Care
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Legal Information
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Achievements
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-3">
              <h2 className="footer__list__title">Follow Us</h2>
              <ul class="nav footer__social__media">
                <li class="nav-item btn btn-light rounded-circle mr-2">
                  <a class="nav-link " href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li class="nav-item btn btn-light rounded-circle mx-2">
                  <a class="nav-link" href="#">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li class="nav-item  mx-2">
                  <a class="nav-link" href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="nav-item btn btn-light rounded-circle ml-2">
                  <a class="nav-link">
                    <i class="fa-brands fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="SectionTitle__hr footer__bottom__hr"></div>
        </div>
        <div className="footer__copyright">
          <span>
            &copy; <i>Filtro</i> All Rights Reserved
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
