import React from 'react'

const CoursesContext = React.createContext({
    activeValue:"orders",
    searchvalue: "",
    onchangeSearch: () => {},
    onChangeActive:() => {}
})

export default CoursesContext