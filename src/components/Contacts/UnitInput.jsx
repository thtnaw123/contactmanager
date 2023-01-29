import React, { Component } from "react";
import classnames from "classnames";
class UnitInput extends Component {
  render() {
    const { type, name, value, handleChange, error } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={`${name}`}>{name}</label>
        <input
          type={`${type}`}
          name={`${name}`}
          className={classnames("form-control form-control-lg ", {
            "is-invalid": error,
          })}
          placeholder={`Enter ${name}...`}
          value={value}
          onChange={handleChange}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
}

export default UnitInput;
