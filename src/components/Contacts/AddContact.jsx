import React, { Component } from "react";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Consumer } from "../../context";
import UnitInput from "./UnitInput";
// import { useNavigate } from "react-router-dom";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  theId = 10;
  // navigate = useNavigate();
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    console.log(this.state);
    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: `Name is required` } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: `Email is required` } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: `Phone is required` } });
      return;
    }
    console.log(this.errors);

    const newContact = { id: this.theId++, name, email, phone };
    // console.log(newContact);
    dispatch({ type: "ADD_CONTACT", payload: newContact });

    this.setState({ name: "", email: "", phone: "", errors: {} });

    // this.navigate("/");
  };
  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div>
              <div
                className="card mb-3"
                style={{
                  width: "600px",
                  marginLeft: "480px",
                  marginTop: "50px",
                }}
              >
                <div className="card-header"> Add Contact</div>
                <div className="card-body">
                  <form action="" onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <UnitInput
                      type={"text"}
                      name={"name"}
                      value={name}
                      handleChange={this.onChange}
                      error={errors.name}
                    />
                    <UnitInput
                      type={"email"}
                      name={"email"}
                      value={email}
                      handleChange={this.onChange}
                      error={errors.email}
                    />
                    <UnitInput
                      type={"text"}
                      name={"phone"}
                      value={phone}
                      handleChange={this.onChange}
                      error={errors.phone}
                    />

                    <input
                      type="submit"
                      value="Add Contact"
                      className="btn btn-light btn-block"
                    />
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
