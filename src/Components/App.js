import React, { Component } from "react";
import Header from "./Header/Header";
import SectionTitle from "./SectionTitle/SectionTitle";
import Card from "./Card/Card";
import cards from "./Card/cards";
import Brands from "./Brands/Brands";
import Footer from "./Footer/Footer";
//! import cards images
import cappuccino from "../images/Cappacino.png";
import mocha from "../images/Mocha.png";
import latte from "../images/Latte.png";
import coldJava from "../images/Cold Java.png";
//! import Brands images
import starBucks from "../images/Stackbuks logo.png";
import nescafe from "../images/Nescafe-Logo.png";
import timhortons from "../images/Tim hortins.png";
import dunkin from "../images/Dunkin Donuts.png";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SectionTitle sectionTitle="Explore the Coffee World" />
        <div className="cards">
          <div className="container">
            <div className="row justify-content-center">
              <Card
                imgURL={cappuccino}
                title={cards[0].title}
                info={cards[0].info}
                price={cards[0].price}
              />
              <Card
                imgURL={mocha}
                title={cards[1].title}
                info={cards[1].info}
                price={cards[1].price}
              />
              <Card
                imgURL={latte}
                title={cards[2].title}
                info={cards[2].info}
                price={cards[2].price}
              />
              <Card
                imgURL={coldJava}
                title={cards[2].title}
                info={cards[2].info}
                price={cards[2].price}
              />
            </div>
          </div>
        </div>
        <SectionTitle sectionTitle="Brands We Work With" />
        <div className="brands">
          <div className="container">
            <div className="row justify-content-lg-around justify-content-center">
              <Brands imgURL={starBucks} />
              <Brands imgURL={nescafe} />
              <Brands imgURL={timhortons} />
              <Brands imgURL={dunkin} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
