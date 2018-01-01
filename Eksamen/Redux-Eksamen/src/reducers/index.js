import {combineReducers} from 'redux';
import LibraryReducer from "./LibraryReducer";
import SelectionReducer from './SelectionReducer'

export default combineReducers({
    //Sets initial state
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});