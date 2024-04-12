import React from 'react';

// Create a context with default values
const CoursesContext = React.createContext({
    activeValue: "orders", // Default value for active tab
    searchvalue: "", // Default value for search input
    onchangeSearch: () => {}, // Default function for handling search input change
    onChangeActive: () => {} // Default function for changing active tab
});

export default CoursesContext; // Export the CoursesContext
