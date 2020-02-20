import {combineReducers} from 'redux';
import kimlikdogrulamaReducers from './kimlikdogrulamaReducers';
import PickerReducers from './PickerReducers';

export default combineReducers({
  kimlikdogrulamaResponse: kimlikdogrulamaReducers,
  PickerReducerResponse: PickerReducers,
});
