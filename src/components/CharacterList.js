import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions';

class CharacterList extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <h4>Characters</h4>
        <ul>
          {this.props.characters.map(character => {
            return (
              <li key={character.id}>
                <div>{character.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapsStateToProps(state) {
  console.log('state', state);
  return {
    characters: state.characters,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapsStateToProps,
  null
)(CharacterList);
