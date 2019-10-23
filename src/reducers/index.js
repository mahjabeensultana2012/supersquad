import { combineReducers } from 'redux';
import characters_json from '../data/characters.json';

import characters from './characters_reducer';
import heroes from './heroes_reducer';

const rootReducer = combineReducers({
  characters,
  heroes,
});

export default rootReducer;
