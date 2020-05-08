//App.js IS THE CENTRE OF ALL REACT JS COMPONENTS, everything links back to this


//when using react, must always import this
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

//import default export or { names export } from "filepath relative to this file"

import AnyName, { Hi, Btn } from "./components/ReactBasics"
import Navbar from "./components/Navbar"
import ControlPanel from './components/PropsOrParameters'; 
import {  Button } from "@material-ui/core"
import C, { F } from "./components/oldStyleComponents/oldStyleComponent"


const App = () => {

  //using 'useState' imported from react
  //returns an obj containing the variable and a function to change the variable
  const [name, setName] = useState('Harry')
  const legallyChangeName = () => {
    const names = ['Sarai', 'Sumith', 'Aaryan', 'Sam']
    var index = Math.round(Math.random()*names.length)
    setName(names[index])
  }

  
  return (
    <div className="App">

      {/* new imported components can be used as normal */}

        <Navbar />
        Learn React with the gang

        {/* parameters can be passed into components like attributes */}

        <ControlPanel controls={['subscribe', 'shear sheeep']} name={name} />
        <Button onClick={legallyChangeName} >Change name</Button>
        <F />
        <C />

    </div>
  );
}

export default App;
