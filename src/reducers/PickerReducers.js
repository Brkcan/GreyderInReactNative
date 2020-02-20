import {VERI_CHANGED} from '../actions/types';

const INITIAL_STATE = {
  bilgi: '',
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case VERI_CHANGED:
      return {
        ...state,
        bilgi: action.payload,
      };

    default:
      return state;
  }
};
