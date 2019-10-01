export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const ADD_MESSAGE = 'ADD_MESSAGE';

export const SHOW_USER_INFO = 'SHOW_USER_INFO';
export const HIDE_USER_INFO = 'HIDE_USER_INFO';

export const ADD_USER = 'ADD_USER';
export const MODIFY_USER = 'MODIFY_USER';


export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}


export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    message,
  };
}


export function showUserInfo(userInfo) {
  return {
    type: SHOW_USER_INFO,
    userInfo,
  };
}


export function hideUserInfo() {
  return {
    type: HIDE_USER_INFO,
  };
}


export function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}


export function modifyUser(userName, user) {
  return {
    type: MODIFY_USER,
    userName,
    user,
  };
}
