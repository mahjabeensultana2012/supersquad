import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component {
  render() {
    return (
      <div>
        <h4>Squad</h4>
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
