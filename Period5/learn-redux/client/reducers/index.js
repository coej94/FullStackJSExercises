import { combineReducers } from 'redux';
import { routerReducers, routerReducer } from 
'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducers = combineReducers({ posts, comments, routing: routerReducer});

export default rootReducers;