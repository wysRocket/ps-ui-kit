import React from 'react';
import './App.css';
import {Main} from "./components/Main";
import {SideBar} from "frontend-common";

const App: React.FC = () => {
  return (
    <div className="App">
      <MainContent/>
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
