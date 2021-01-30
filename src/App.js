import React, { useState, useEffect } from 'react'
import './App.scss';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer'

const App = () => {

  const [storiesList, setStoriesList] = useState([]);

  useEffect(() => {
    fetch('https://www.pivotaltracker.com/services/v5/projects/2048617/stories')
      .then(res => res.json())
      .then(list => {
        setStoriesList(list);
      })
  }, [])

  return (
    <div className="App">
      <Header title={"PagoPa Challenge"}/>
      <MainContainer storiesList={storiesList}/>
    </div>
  );
}

export default App;
