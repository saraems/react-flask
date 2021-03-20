import { combineReducers } from 'redux';
import { aboutMeStateReducer } from '../aboutMe/redux';

const createRootReducer = () =>
  combineReducers({
    aboutMe: aboutMeStateReducer,
  });

const rootReducer = createRootReducer();

export default rootReducer;
