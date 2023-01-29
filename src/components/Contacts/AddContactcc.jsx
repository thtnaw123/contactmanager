import React from "react";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Consumer } from "../../context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import classnames from "classnames";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  let theId = 10;
  const navigate = useNavigate();
  const onSubmit = (dispatch, e) => {
    e.preventDefault();
    // const { name, email, phone } = theState;

    if (name === "") {
      setErrors({ errors: { name: `Name is required` } });
      return;
    }

    if (email === "") {
      setErrors({ errors: { email: `Email is required` } });
      return;
    }
    if (phone === "") {
      setErrors({ errors: { phone: `Phone is required` } });
      return;
    }

    const newContact = { id: theId++, name, email, phone };
    // console.log(newContact);
    dispatch({ type: "ADD_CONTACT", payload: newContact });

    // settheState({ name: "", email: "", phone: "", errors: {} });

    setName("");
    setEmail("");
    setPhone("");
    setErrors({});

    navigate("/");
  };

  return (
    <Consumer>
      {(value) => {
        const { dispatch } = value;
        // const { name, email, phone, errors } = theState;
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
                <form action="" onSubmit={onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.name,
                      })}
                      placeholder={`Enter a name...`}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input
                      type="email"
                      name="email"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.email,
                      })}
                      placeholder={`Enter a email...`}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors,
                      })}
                      placeholder={`Enter a phone...`}
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">{errors.phone}</div>
                    )}
                  </div>

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
};

export default AddContact;
