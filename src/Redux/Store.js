import {configureStore} from '@reduxjs/toolkit';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import productReducer from './Reducer';
import {applyMiddleware} from 'redux'

const middleware=[thunk]
const store= configureStore(
    {reducer:productReducer},
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
