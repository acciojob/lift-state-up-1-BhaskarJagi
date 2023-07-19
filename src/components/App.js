
import React, { useState } from "react";
import ModelContext from './ModelContext'
import './../styles/App.css';

const App = () => {

  let [obj,setObj] = useState({})
  return (
    <div className="parent-component">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <div className="child-component">
          <h2>Child Component</h2>
          <ModelContext showModel={setObj}/>
          <h3>{obj.context}</h3>
          <p>{obj.text}</p>
        </div>
    </div>
  )
}

export default App
