import{createStore,applyMiddleware,compose,combineReducers} from 'redux'

import {loginnreducer} from './Login/loginreducer'
import {reducer} from "./reducer"

import thunk from "redux-thunk"
import { signupreducer } from './Register/registerreducer'

export const rootreducer=combineReducers({
    signup:signupreducer,
    login:loginnreducer,
    flat:reducer
})


export const store=createStore(rootreducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()))

 console.log(store.getState())