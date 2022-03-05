import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PastRacesList from './PastRacesList/PastRacesList';
import AboutUs from './AboutUs/AboutUs';
import AlleycatDetails from './AlleycatDetails/AlleycatDetails';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="past-races" element={<PastRacesList />} />
        <Route path="/" element={<AboutUs />} />
        <Route path="/past-races/:id" element={<AlleycatDetails />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
