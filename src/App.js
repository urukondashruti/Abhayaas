import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoursesContext from "./Context/CoursesContext";
import MainContent from "./MainContent"; // Assuming MainContent is imported

import Signup from "./Signup";
import Login from "./Login";
import Products from "./Product";
import Card from "./Card";
import About from "./About";
import Profile from "./Profile";
import Classes from "./Classes";

class App extends React.Component {
  state = {
    searchvalue: "",
    activeValue: "orders",
  };

  onChangeActive = (activevalue) => {
    this.setState({ activeValue: activevalue });
  };

  onchangeSearch = (searchValue) => {
    this.setState({ searchvalue: searchValue });
  };

  render() {
    const { searchvalue, activeValue } = this.state;

    return (
      <CoursesContext.Provider
        value={{
          searchvalue,
          activeValue,
          onchangeSearch: this.onchangeSearch,
          onChangeActive: this.onChangeActive,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainContent />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/carts" element={<Card />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/classes" element={<Classes />} />
          </Routes>
        </BrowserRouter>
      </CoursesContext.Provider>
    );
  }
}

export default App;
