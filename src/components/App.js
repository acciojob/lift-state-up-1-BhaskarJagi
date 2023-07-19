
import React, { useState } from "react";
import ModalContent from './ModalContent'
import './../styles/App.css';

const App = () => {

  let [obj,setObj] = useState({})
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <div className="child-component">
          <h2>Child Component</h2>
          <ModalContent showModal={setObj}/>
          <h3>{obj.Content}</h3>
          <p>{obj.text}</p>
        </div>
    </div>
  )
}

export default App
