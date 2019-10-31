import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component {
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
