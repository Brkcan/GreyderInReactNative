import {VERI_CHANGED} from './types';

export const veriChanged = ({bilgi}) => {
  return dispatch => {
    dispatch({
      type: VERI_CHANGED,
      payload: bilgi
    })
  }
}
