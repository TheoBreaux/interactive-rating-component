import React from "react";
import "./Header.css";
import StarIcon from "../images/icon-star.svg";

const Header = () => {
  return (
    <header>
      <div className="star-icon-container">
        <img className="star" src={StarIcon} alt="image of star" />
      </div>

      <h1 className="title">How did we do?</h1>

      <p className="text-box">
        Please let us know how we did with your support <br />
        request. All feedback is appreciated to help us <br />
        improve our offering!
      </p>
    </header>
  );
};

export default Header;
