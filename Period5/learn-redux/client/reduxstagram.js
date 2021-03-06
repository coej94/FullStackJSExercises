import React from 'react';
import { render } from 'react-dom';

//import styles
import css from './styles/style.styl';

//import components 
import Main from './components/Main'
import PhotoGrid from './components/PhotoGrid'
import Single from './components/Single'

//import react router deps  
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import { Provider } from 'react-redux';

import store /*default export*/, 
        { history } /*named export */ 
        from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={Main}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path='/view/:postId' component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)
render(
    router,
    document.getElementById('root')
);  