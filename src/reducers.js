import { combineReducers } from 'redux';

import {
  SET_CURRENT_USER, ADD_MESSAGE,
  SHOW_USER_INFO, HIDE_USER_INFO,
  ADD_USER, MODIFY_USER,
} from './actions';


function currentUser(state = null, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return state ? { ...state, ...action.user } : action.user;
    default:
      return state;
  }
}


function messages(state = [], action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.message];
    default:
      return state;
  }
}


function userInfo(state = null, action) {
  switch (action.type) {
    case SHOW_USER_INFO:
      return action.userInfo;
    case HIDE_USER_INFO:
      return null;
    default:
      return state;
  }
}


function users(state = [], action) {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.user];
    case MODIFY_USER:
      return state.map((user) => {
        if (user.name === action.userName) {
          return { ...user, ...action.user };
        }
        return user;
      });
    default:
      return state;
  }
}

export default combineReducers({
  currentUser,
  messages,
  userInfo,
  users,
});
