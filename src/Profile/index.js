import React from "react";
import { useLocation } from "react-router-dom";
import CoursesContext from '../Context/CoursesContext';
import Orders from "../Orders";
import Tests from "../Tests";
import Questions from "../Questions";
import "./index.css"; // Import CSS file for styling

const options = [
  {id:"orders", name:"ORDERS"},
  {id:"tests", name:"TESTS"},
  {id:"QA", name:"Q/A"}
]

const Profile = () => {
  // Access the props passed from Login component
  const { state } = useLocation();
  const { info } = state;

  return (
    <CoursesContext.Consumer>
    {value => {
      const {
        activeValue,
        onChangeActive,
      } = value

      const DisplayActiveField = () => {
        console.log(activeValue);
        if (activeValue === "orders") {
          return <Orders />;
        } else if (activeValue === "tests") {
          return <Tests />;
        } else {
          return <Questions />;
        }
      };
      
      return (
    <div className="profile-container">
      <div className="container-profile">
        <div className="profile-info">
          <h1>{info.name}</h1>
          <p>+9386725467</p>
          <p>{info.email}</p>
          <div className="button-container">
            <button className="edit-button">EDIT</button>
            <button className="logout-button">LOGOUT</button>
          </div>
        </div>
        <div className="address-info">
          <h1>ADDRESS</h1>
          <p>R107,AJMERA INFINITY,<br/>KARUNA NAGAR ,ELECTRONIC CITY,<br/>BANGLORE,INDIA PIN:846009</p>
        </div>
      </div>
      <div className="profile-options">
        <ul className="options">
          {options.map(each => {
            const Active = each.id === activeValue;
            const onActive = () => {
              onChangeActive(each.id)
            }
            return (
              <li key={each.id}>
                <button onClick={onActive} className={Active ? "activeButton" : "button1"}>{each.name}</button>
              </li>
            )
          })}
        </ul>
        <hr/>
        </div>
        <div className="active-field">
          <DisplayActiveField />
        </div>
    </div>
    )}}
  </CoursesContext.Consumer>
  );
};

export default Profile;
