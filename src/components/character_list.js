import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharacterList extends Component {
  render() {
    return (
      <div>
        <h4>Characters</h4>
      </div>
    );
  }
}

function mapsStateToProps(state) {
  console.log('state', state);
  return {};
}

export default connect(
  mapsStateToProps,
  null
)(CharacterList);
