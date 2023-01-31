import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import Home from "./components/Home";
import GenerateSummary from "./components/GenerateSummary";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />

      
      <Routes>
        <Route path="/" exact element={
          <Home />
        }
        />
        
        <Route path="/GenerateSummary" component = {GenerateSummary} />
      </Routes>
      </Fragment>
    </Router>
  );
}

export default App;