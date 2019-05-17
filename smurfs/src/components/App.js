import React, { Component } from "react";
import "./App.css";
import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfForm"
import { getSmurfs } from "../actions";
import { connect } from "react-redux";
import { Route, NavLink } from "react-router-dom";

let name = "";
let height = null;
let age = null;

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  getName = event => {
    name = event.target.value;
  };
  getAge = event => {
    age = event.target.value;
  };
  getHeight = event => {
    height = event.target.value;
  };

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h1>Smurf Ville</h1>
          <NavLink to="/Smurfs">The Village</NavLink>
          <NavLink to="/smurf-form">Customs</NavLink>
        </div>

        <Route
          path="/Smurfs"
          render={props => <Smurfs smurfs={this.props.smurfs} />}
        />
        <Route
          path="/smurf-form"
          render={props => <SmurfForm smurfs={this.props.smurfs}/>}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
