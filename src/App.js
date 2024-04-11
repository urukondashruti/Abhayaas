import React from "react";
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import MainContent from "./MainContent";
import Signup from "./Signup";
import Login from "./Login";
import Products from "./Product";
import Card from "./Card";
import CoursesContext from './Context/CoursesContext';
import About from "./About";
import Profile from "./Profile";
import './App.css';

class App extends React.Component{
   state ={
    searchvalue:"",
  }
  onchangeSearch = (searchValue) => {
    this.setState({searchvalue:searchValue})
   }

  render(){
    const {searchvalue} = this.state
  return (
    <CoursesContext.Provider
    value={{
      searchvalue,
      onchangeSearch: this.onchangeSearch
    }}
  >
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<MainContent/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/signup" element={<Signup/>}/>
    <Route exact path="/products" element={<Products/>}/>
    <Route exact path="/carts" element={<Card/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/profile" element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </CoursesContext.Provider>
  );
  }
}

export default App;
