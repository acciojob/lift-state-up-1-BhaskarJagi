
import React, { useState } from "react";
import ModalContext from './ModalContext'
import './../styles/App.css';

const App = () => {

  let [obj,setObj] = useState({})
  return (
    <div className="parent-component">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <div className="child-component">
          <h2>Child Component</h2>
          <ModalContext showModal={setObj}/>
          <h3>{obj.context}</h3>
          <p>{obj.text}</p>
        </div>
    </div>
  )
}

export default App
