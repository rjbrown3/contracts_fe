import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import GenerateSummary from './components/GenerateSummary';

const App = () => {
  return (
    <Router>

      {/* Header component will show on all pages */}
      <Header />

      <Routes>
        {/* Home component will show on home page */}
        <Route path='/' exact element={
          <Home />
        }
        />
        
        {/* Add generate summary component */}
        <Route path='/GenerateSummary' element = {<GenerateSummary />} />
      </Routes>   

    </Router>
  );
}

export default App;