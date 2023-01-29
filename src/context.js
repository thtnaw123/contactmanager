import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Juve Dock",
        email: "juved@email.com",
        phone: "+777 777 7777",
      },
      {
        id: 2,
        name: "tehutB",
        email: "Tehutb@email.com",
        phone: "+555 555 555",
      },
      {
        id: 3,
        name: "Joe Dock",
        email: "joed@email.com",
        phone: "+8888 888 888",
      },
      {
        id: 4,
        name: "Joe Dock",
        email: "joed@email.com",
        phone: "+8888 888 888",
      },
    ],

    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
