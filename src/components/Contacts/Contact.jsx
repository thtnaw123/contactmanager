import React, { Component } from "react";
import "./Contact.css";
// import PropTypes from "prop-types";
import "../../utils/fontawesome-free-6.2.1-web/css/all.css";
import { Consumer } from "../../context";
class Contact extends Component {
  state = {
    showContactInfo: false,
  };
  showToggle = (name) => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { name, email, phone, id } = this.props.contact;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div>
              <div className="unitContact">
                <h2 className="contact-title">
                  {name}
                  <i
                    onClick={() => this.showToggle(name)}
                    className="fas fa-sort-down"
                  ></i>
                  <i
                    className="fas fa-times"
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  ></i>
                </h2>
                {this.state.showContactInfo ? (
                  <ul className="contact-elements">
                    <li>email: {email}</li>
                    <li>phone: {phone}</li>
                  </ul>
                ) : null}
                <p>{id}</p>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
// };

export default Contact;
