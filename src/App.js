import "./App.css";
import React, { Component } from "react";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/layout/Header";
import { Provider } from "./context";
import AddContact from "./components/Contacts/AddContact";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/about";
import "./utils/fontawesome-free-6.2.1-web/css/all.css";
import Notfound from "./components/pages/Notfound";
import Books from "./components/layout/Books";

class App extends Component {
  // navigate = useNavigate();
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <div>
            <Routes>
              <Route exact path="/" element={<Contacts />} />
              <Route exact path="/addcontact" element={<AddContact />} />
              <Route exact path="/about" element={<About />} />
              <Route path="*" element={<Notfound />} />
              <Route exact path="/books/:id" element={<Books />} />
            </Routes>
          </div>
        </div>
      </Provider>
    );
  }
}
// return React.createElement("h1", { className: "app" }, "hello");

export default App;
