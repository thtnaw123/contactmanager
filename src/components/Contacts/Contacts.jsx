import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  // handleDelete = (id) => {
  //   console.log("delete handled", id);
  //   const newContacts = this.state.contacts.filter(
  //     (contact) => contact.id !== id
  //   );
  //   this.setState({ contacts: newContacts });
  // };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <div className="display-4 mb-4" style={{ textAlign: "center" }}>
                <span className="text-danger">Contacts</span> List
              </div>
              {contacts.map((contact) => (
                <Contact key={contact.id} id={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
