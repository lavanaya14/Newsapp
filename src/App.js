import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {   
  pageSize = 7;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/"> <News key="General" pageSize={this.pageSize} country="us" category="General" /></Route>
            <Route exact path="/Business"> <News key="Business" pageSize={this.pageSize} country="us" category="Business" /></Route>
            <Route exact path="/Entertainment"> <News key="Entertainment" pageSize={this.pageSize} country="us" category="Entertainment" /></Route>
            <Route exact path="/General"> <News key="General" pageSize={this.pageSize} country="us" category="General" /></Route>
            <Route exact path="/Health"> <News key="Health" pageSize={this.pageSize} country="us" category="Health" /></Route>
            <Route exact path="/Science"> <News key="Science" pageSize={this.pageSize} country="us" category="Science" /></Route>exact
            <Route exact path="/Sports"> <News key="Sports" pageSize={this.pageSize} country="us" category="Sports" /></Route>
            <Route exact path="/Technology"> <News key="Technology" pageSize={this.pageSize} country="us" element="Technology" /></Route>
          </Routes>

        </Router>
      </div>
    )
  }
}