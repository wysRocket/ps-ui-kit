import React from 'react';
import './App.css';
import {Main} from "./components/Main";
import {BrowserRouter as Router, Route, Switch, useLocation, useParams} from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <MainContent/>
      </Router>
    </div>
  );
};

function MainContent() {
  return (
    <Main/>
  );
}

function NoService() {
  return (
    <div>
      <h3>Service is not selected</h3>
    </div>
  );
}

export default App;
