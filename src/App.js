import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoursesContext from "./Context/CoursesContext"; // Importing CoursesContext
import MainContent from "./MainContent"; // Assuming MainContent is imported

import Signup from "./Signup"; // Importing Signup component
import Login from "./Login"; // Importing Login component
import Products from "./Product"; // Importing Products component
import Card from "./Card"; // Importing Card component
import About from "./About"; // Importing About component
import Profile from "./Profile"; // Importing Profile component
import Classes from "./Classes"; // Importing Classes component

class App extends React.Component {
  state = {
    searchvalue: "", // Initializing search value state
    activeValue: "orders", // Initializing active value state
  };

  // Method to update active value state
  onChangeActive = (activevalue) => {
    this.setState({ activeValue: activevalue });
  };

  // Method to update search value state
  onchangeSearch = (searchValue) => {
    this.setState({ searchvalue: searchValue });
  };

  render() {
    const { searchvalue, activeValue } = this.state;

    return (
      // Providing context values to descendants
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
            {/* Route for the home page */}
            <Route exact path="/" element={<MainContent />} />
            {/* Route for the login page */}
            <Route exact path="/login" element={<Login />} />
            {/* Route for the signup page */}
            <Route exact path="/signup" element={<Signup />} />
            {/* Route for the products page */}
            <Route exact path="/products" element={<Products />} />
            {/* Route for the cart page */}
            <Route exact path="/carts" element={<Card />} />
            {/* Route for the about page */}
            <Route exact path="/about" element={<About />} />
            {/* Route for the profile page */}
            <Route exact path="/profile" element={<Profile />} />
            {/* Route for the classes page */}
            <Route exact path="/classes" element={<Classes />} />
          </Routes>
        </BrowserRouter>
      </CoursesContext.Provider>
    );
  }
}

export default App;
