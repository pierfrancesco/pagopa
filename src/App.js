import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import Loader from './components/Loader/Loader';

const App = () => {
  const [storiesList, setStoriesList] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    fetch('https://www.pivotaltracker.com/services/v5/projects/2048617/stories')
      .then((res) => res.json())
      .then((list) => {
        setStoriesList(list);
        setShowLoader(false);
      });
  }, []);

  return (
    <div className="App">
      <Header title="PagoPa Challenge" />
      <MainContainer storiesList={storiesList} />
      {showLoader && <Loader />}
    </div>
  );
};

export default App;
