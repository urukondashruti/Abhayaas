import React from 'react'

const CoursesContext = React.createContext({
    searchvalue: "",
    onchangeSearch: () => {},
})

export default CoursesContext