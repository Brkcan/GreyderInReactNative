import firebase from '@firebase/app';
import '@firebase/auth';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
} from './types';

export const emailChanged = email => {
  return dispatch => {
    dispatch({
      type: EMAIL_CHANGED,
      payload: email
    });
  };
};

export const passwordChanged = password => {
  return dispatch => {
    dispatch({
      type: PASSWORD_CHANGED,
      payload: password
    });
  };
};

export const loginUser = ({email, password}) => {
  return dispatch => {
    dispatch({
      type: LOGIN_USER
    })
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginSucces(dispatch,user));
  }
};

const loginSucces = (dispatch,user) => {
  dispatch({
    type:LOGIN_USER_SUCCESS,
    payload: user,
  })
}
