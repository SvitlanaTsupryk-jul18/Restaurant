import React from "react";

const Header = ({ value, setFilterQuery }) => (
  <header className="header">
    <h1>Dish</h1>
    <ul className="header__nav">
      <li>Our Restaurant</li>
      <li>Menu</li>
      <li>Contact us</li>
    </ul>
    <input
      name="filter"
      type="text"
      value={value}
      placeholder="What dish do you want to find?"
      onChange={event => setFilterQuery(event)}
      className="filter"
    />
    <div>John C.</div>
  </header>
);

export default Header;
