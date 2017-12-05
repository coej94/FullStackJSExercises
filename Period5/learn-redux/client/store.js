import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer.
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//Create an object for the default data 
const defaultState = {
    posts, //ES6 instead of writing posts: posts - it doesnt need the property key
    comments 
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;