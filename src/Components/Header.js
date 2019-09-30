import React from "react";
import logo from "../images/restaurant-logo.png";
import user from "../images/user.svg";

const Header = ({ value, setFilterQuery }) => (
  <div className="header__wrapper">
    <header className="header container">
      <img src={logo} />
      <ul className="header__nav">
        <li>
          <a href="#">Our Restaurant</a>{" "}
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
      </ul>
      <input
        name="filter"
        type="text"
        value={value}
        placeholder="Try «Chicken cotoletta»"
        onChange={event => setFilterQuery(event)}
        className="filter"
      />
      <div>
        John C. &nbsp;&nbsp;
        <img src={user} />
      </div>
    </header>
    <div className="title container">
      <h1>Menu</h1>
    </div>
  </div>
);

export default Header;
