import React from 'react';
import './App.css';
import {Main} from "./components/Main";
import {BrowserRouter as Router, Route, Switch, useLocation, useParams} from "react-router-dom";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <DndProvider backend={HTML5Backend} debugMode={true}>
          <MainContent/>
        </DndProvider>
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
