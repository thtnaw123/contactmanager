import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <h2> {props.branding}</h2>
      <div className="links">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return isActive ? { color: "#000" } : { color: "#fff" };
          }}
          className="link"
        >
          <i className="fas fa-home"></i>
          Homes
        </NavLink>
        <Link to="/addcontact" style={{ color: "#fff" }} className="link">
          <i className="fas fa-plus"></i>
          Add Contact
        </Link>
        <Link to="/about" style={{ color: "#fff" }} className="link">
          <i className="fas fa-question"></i>
          About
        </Link>
        <Link to="/books/:4" replace>
          Books
        </Link>
      </div>
    </div>
  );
};
Header.defaultProps = {
  branding: "My App",
};
Header.propTypes = {
  branding: PropTypes.string.isRequired,
};
export default Header;
