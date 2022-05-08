import React, { Component } from "react";
import "./SectionTitle.css";

class SectionTitle extends Component {
  render() {
    const { sectionTitle } = this.props;
    return (
      <div className="SectionTitle">
        <div className="container">
          <div className="SectionTitle__title__wrapper">
            <div className="SectionTitle__hr"></div>
            <h2 className="SectionTitle__title">{sectionTitle}</h2>
            <div className="SectionTitle__hr"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionTitle;
