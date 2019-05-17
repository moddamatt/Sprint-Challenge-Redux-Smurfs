import React, { Component } from "react";
import "./App.css";
import SmurfVillage from "./Smurfs";
import { getSmurfs } from "../actions";
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
  }

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
        <Smurfs smurfs={this.props.smurfs} />
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
