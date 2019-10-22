import chacters_json from '../data/chacters_json';

function characters(state = chacters_json, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default characters;
