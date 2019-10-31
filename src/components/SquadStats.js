import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component {
  strenth() {
    let Strength = 0;
    this.props.heroes.forEach(hero => (Strength += hero.strenth));
    return strenth;
  }
  render() {
    return (
      <div>
        <h4>Squad Stats</h4>
        <ul className="list-group">
          <li className="list-group-item"></li>
          <b>Overall Strength:</b>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes,
  };
}

export default connect(
  mapStateToProps,
  null
)(SquadStats);
