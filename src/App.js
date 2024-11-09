import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import axios from 'axios';
import {action,orginals} from './urls';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import MovieDetail from './Components/MovieDetail/MovieDetail'


function App() {
  const [state,setState]= useState('')

  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Banner/>
      <Routes>
        <Route path="/" element={
          <>
          <RowPost url={action} title='Netflix Orginals' />
          <RowPost url={orginals} title='Action' isSmall />
          </>
        }/>
        <Route path="/movie/:id" element={<MovieDetail/>} />
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
