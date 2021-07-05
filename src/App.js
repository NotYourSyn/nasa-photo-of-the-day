import React, {useState, useEffect} from "react";
import axios from 'axios';
import Header from './components/Header';
import Photo from './components/Photo';
import Footer from './components/Footer'
import "./App.css";

function App() {
  const [apod, setApod] = useState([]);

  useEffect(() =>{
    axios
      .get()
      .then()
      .catch() 
  })

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
